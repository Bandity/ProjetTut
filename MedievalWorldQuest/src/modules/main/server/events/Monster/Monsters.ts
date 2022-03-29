import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
//import { Enemy} from '../../../../../@types'
import { EventData, Move } from '@rpgjs/server'
import { Presets, RpgPlayer, RpgEvent } from '@rpgjs/server'
import Combats from '../Combats'
import { Choice } from '@rpgjs/server/lib/Gui/DialogGui'
import { SkillOptions } from '../../../../../@types/skill'
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export function MonsterGenerator(options: {

    gain: { exp: number, gold: number }
    name: string,
    graphic: string,
    health: { start: number, end: number },
    spells: { start: number, end: number },
    str: { start: number, end: number },
    int: { start: number, end: number },
    dex: { start: number, end: number },
    agi: { start: number, end: number },
    playerSpRegener: { start: number, end: number },
    mapDepart: string,
    mapCombat: string,
    boss?: boolean,
    randomMove?: boolean,



}): object {
    const { name, graphic, gain, spells, health, str, int, dex, agi, playerSpRegener, mapCombat, mapDepart, randomMove } = options

    @EventData({
        name,
        hitbox: {
            width: 32,
            height: 16
        },
        //mode: EventMode.Scenario,
    })
    class Monster extends RpgEvent {
        async onInit(player: RpgPlayer) {
            this.setGraphic(graphic)
            this.setVariable("gain", gain)
            this.setVariable("startingEquipment", [Sword, Shield])
            this.setVariable("parameters",
                {
                    maxHp: health,
                    maxSp: spells,
                    str,
                    int,
                    dex,
                    agi,

                }
            )
            //this.setVariable("pv", Math.floor(Math.random() * (600 - 440) + 540));
            this.setVariable("pv", 50);
            if (options.boss != true && options.randomMove != false) 
                this.infiniteMoveRoute([Move.tileRandom()])
            this.speed = 2
            this.frequency = 2
        }

        async onAction(player: RpgPlayer) {
            if (this.name == "MonstreEntrainement" && player._class == null) { return }
            const choice = await player.showChoices("Lancer le combat ?", [
                { text: 'Prêt', value: 'oui' },
                { text: 'Partir', value: 'non' },
            ]);

            if (choice?.value === "oui") {

                player.changeMap(mapCombat);
                let pos_player = player.position
                await timeout(150)
                this.start(player, pos_player);

            }
            else {
                await player.showNotification("Lache");
            }
        }


        async start(player: RpgPlayer, player_pos: {
            x: number,
            y: number,
            z: number
        }) {

            let monsterDamageTook = 0;
            let playerDamageTook = 0;
            let skillchoice;
            let parameters = this.getVariable("parameters");
            let count = 1;
            let sp_regenerate = 0
            let animations = player.getVariable("animations");

            while (this.getVariable("pv") > 0 && player.hp > 0) {
                console.log("Round " + count)
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
                        monsterDamageTook = player.param.str - parameters.dex.start;
                        //Damage that the player will take
                        playerDamageTook = parameters.str.start * 2 - player.param.dex;
                        player.showAnimation("incision", "default");
                        await timeout(75);
                    }
                    else { //Skills
                        let skillUsed: SkillOptions = player.skills[skillchoice?.value];
                        console.log("Skill :" + skillUsed.name);

                        if (skillUsed.power != undefined && skillUsed.variance != undefined && skillUsed.hitRate && skillUsed.spCost) {
                            if (player.sp - skillUsed.spCost >= 0) {
                                player.sp -= skillUsed.spCost;

                                let alt = Math.random() * 1;
                                if (alt <= skillUsed?.hitRate) {
                                    monsterDamageTook = ((skillUsed.power + (Math.round(Math.random() * (2 * skillUsed.variance) - skillUsed.variance))) / 10) * player.level;
                                    console.log("Skill damage :" + monsterDamageTook);
                                }
                                console.log("Skill costed SP :" + skillUsed.spCost);
                                console.log("Player SP: " + player.sp);
                                await player.showAnimation(animations[skillchoice?.value], "default");
                                await timeout(player.getVariable('tempsAnim')[skillchoice?.value]);
                            } else {
                                await player.showText("Tu n'as plus de mana");
                            }

                            playerDamageTook = parameters.str.start * 2 - player.param.dex;

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
                    sp_regenerate = Math.round(Math.random() * (playerSpRegener.end - playerSpRegener.start)) + playerSpRegener.start;
                    player.sp += sp_regenerate;
                    console.log("Regenerated SP: " + sp_regenerate);
                    count++;
                }
                else if (choice?.value === "def") {
                    let damage = 0;
                    if (player.sp > 0) {
                        player.showAnimation("shield", "default");
                        damage = Math.round(parameters.str.start * Math.random() * (1 - 0.10) + 0.1) - (player.param.dex * 2);
                        if (damage < 0) {
                            player.hp += 0;
                        } else {
                            player.hp -= damage;
                        }
                        console.log("Skill name :" + "Defense");
                        console.log("Skill costed SP :" + player.level * 50);
                        player.sp -= player.level * 50


                    } else {
                        await player.showText("Tu n'as plus de mana");
                    }

                    count++;
                    damage = 0
                    console.log("Player SP: " + player.sp);
                    console.log("Monster HP: " + this.getVariable("pv"));
                    console.log("Player hp: " + player.hp);

                    sp_regenerate = Math.round(Math.random() * (playerSpRegener.end - playerSpRegener.start)) + playerSpRegener.start;
                    player.sp += sp_regenerate;
                    console.log("Regenerated SP: " + sp_regenerate);

                }
                if (this.getVariable("pv") <= 0) {
                    if (options.boss == true) {
                        this.setGraphic("invisible")
                        this.teleport({ x: 0, y: 0, z: 0 });
                        if (options.name == "Prince_des_glaces") {
                            player.setVariable("PDGlaces", 1);
                        }
                    }
                    player.exp+= options.gain.exp;
                    await player.changeMap(mapDepart);
                    await player.teleport(player_pos)
                    await player.showText("Vous avez gagné!")

                    console.log(options.boss)
                }

            }
            Combats.isHeDead(player, mapDepart);
            this.setVariable("pv", parameters.maxHp.start)
        }
    }
    return Monster;
}