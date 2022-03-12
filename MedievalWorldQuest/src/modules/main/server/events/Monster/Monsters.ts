import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
//import { Enemy} from '../../../../../@types'
import { EventData, EventMode } from '@rpgjs/server'
import { Presets, RpgPlayer, RpgEvent } from '@rpgjs/server'
import Combats from '../Combats'
import { Choice } from '@rpgjs/server/lib/Gui/DialogGui'
import { SkillOptions } from '../../../../../@types/skill'

export function MonsterGenerator(options): object {
    const { name, textStart, textEnd, itemRequired, quantity, graphic, gain } = options

    @EventData({
        name: 'Monster',
        hitbox: {
            width: 32,
            height: 16
        },
        mode: EventMode.Scenario
    })
    class Monster extends RpgEvent {
        async onInit(player: RpgPlayer) {
            this.setGraphic("base")
            this.setVariable("gain", { exp: 10, gold: 15 })
            this.setVariable("startingEquipment", [Sword, Shield])
            this.setVariable("parameters",
                {
                    maxHp: { start: 440, end: 600 },
                    maxSp: { start: 534, end: 5500 },
                    str: { start: 31, end: 1000 },
                    int: { start: 26, end: 1000 },
                    dex: { start: 24, end: 564 },
                    agi: { start: 28, end: 582 },

                }
            )
            this.setVariable("pv", Math.floor(Math.random() * (600 - 440) + 540))
            this.getVariable("parameters");
        }

        async onAction(player: RpgPlayer) {
            const choice = await player.showChoices("Lancer le combat ?", [
                { text: 'Prêt', value: 'oui' },
                { text: 'Partir', value: 'non' },
            ]);
            if (choice?.value === "oui") {

                player.changeMap("CombatEgout");
                this.start(player);
            }
            else {
                player.changeMap("MenestrelTown");
                await player.showNotification("Vous êtes mort");
                this.teleport({ x: 3517, y: 1094, z: 0 })
            }
        }

        async start(player: RpgPlayer) {
            let monsterDamageTook = 0;
            let playerDamageTook = 0;
            let skillchoice
            while (this.getVariable("pv") > 0 && player.hp > 0) {
                let choice = await player.showChoices("Options :",
                    [
                        { text: "Attaque", value: 'att' },
                        { text: "Defense", value: 'def' }
                    ])
                if (choice?.value === "att") {
                    // Skills choice
                    if (player.skills.length > 0) {
                        let skills: Array<Choice> = [];
                        for (let i = 0; i < player.skills.length; i++) {
                            skills[i] = {
                                text: player.skills[i].name,
                                value: i
                            }
                        }
                        skills[skills.length] = { text: "Attaque basique", value: skills.length }
                        skillchoice = await player.showChoices("Quelle compétence utiliser ?", skills)

                    }
                    //Basic Attack
                    if (skillchoice?.value === player.skills.length) {
                        //Damage that the monster will take
                        monsterDamageTook = player.param.str - this.getVariable("parameters").dex.start;
                        //Damage that the player will take
                        playerDamageTook = this.getVariable("parameters").str.start * 2 - player.param.dex;

                    }
                    else { //Skills
                        let skillUsed: SkillOptions = player.skills[skillchoice?.value];
                        console.log("Skill :" + skillUsed.name);
                        if (skillUsed.power != undefined && skillUsed.variance != undefined && skillUsed.hitRate) {
                            let alt = Math.random() * 1;
                            if (alt <= skillUsed?.hitRate) {
                                monsterDamageTook = ((skillUsed.power + (Math.round(Math.random() * (2 * skillUsed.variance) - skillUsed.variance))) / 10) * player.level;
                                console.log("Skill damage :" + monsterDamageTook);
                            }
                            playerDamageTook = this.getVariable("parameters").str.start * 2 - player.param.dex;

                        }

                    }
                    // Damage taken
                    if (monsterDamageTook > 0) {
                        this.setVariable("pv", (this.getVariable("pv") - monsterDamageTook));
                    }
                    if (playerDamageTook > 0) {
                        player.hp -= playerDamageTook;
                    }

                    console.log("Monster HP: " + this.getVariable("pv"));
                    console.log("Player hp: " + player.hp);
                    playerDamageTook = 0;
                    monsterDamageTook = 0;
                }
                else if (choice?.value === "def") {
                    let damage = Math.round(this.getVariable("parameters").str.start * Math.random() * (1 - 0.10) + 0.1) - (player.param.dex * 2);
                    if (damage < 0) {
                        player.hp += 0;
                    } else {
                        player.hp -= damage;
                    }
                    console.log("Player hp: " + player.hp)
                }
                if (this.getVariable("pv") <= 0) {
                    player.teleport({ x: 3517, y: 1110, z: 0 });
                    player.showNotification("Vous avez gagner")
                }
            }
            Combats.isHeDead(player)
            this.teleport({ x: 3517, y: 1094, z: 0 })
            this.setVariable("pv", this.getVariable("parameters").maxHp.start)
        }
    }
    return Monster;
}