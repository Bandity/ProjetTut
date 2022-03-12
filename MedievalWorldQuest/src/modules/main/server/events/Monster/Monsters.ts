import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
//import { Enemy} from '../../../../../@types'
import { EventData, EventMode } from '@rpgjs/server'
import { Presets, RpgPlayer, RpgEvent } from '@rpgjs/server'
import Combats from '../Combats'
import { Choice } from '@rpgjs/server/lib/Gui/DialogGui'
import { SkillOptions } from '../../../../../@types/skill'

export function MonsterGenerator(options:{

        gain : {exp: number, gold: number}
        name: string,
        graphic: string,
        health: { start: number, end: number },
        spells: { start: number, end: number },
        str: { start: number, end: number },
        int: { start: number, end: number },
        dex: { start: number, end: number },
        agi: { start: number, end: number },
        playerSpRegener: { start: number, end: number},
        mapDepart : string,
        mapCombat : string,


    
}): object {
    const { name, graphic, gain, spells,health,str,int,dex,agi, playerSpRegener, mapCombat, mapDepart} = options

    @EventData({
        name,
        hitbox: {
            width: 32,
            height: 16
        },
        mode: EventMode.Scenario,
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
            this.setVariable("pv", Math.floor(Math.random() * (600 - 440) + 540))
            this.getVariable("parameters");
        }

        async onAction(player: RpgPlayer) {
            const choice = await player.showChoices("Lancer le combat ?", [
                { text: 'Prêt', value: 'oui' },
                { text: 'Partir', value: 'non' },
            ]);
            if (choice?.value === "oui") {

                player.changeMap(mapCombat);
                this.start(player);
            }
            else {
                player.changeMap(mapDepart);
                await player.showNotification("Vous êtes mort");
                this.teleport({ x: 3517, y: 1094, z: 0 })
            }
        }

        async start(player: RpgPlayer) {
            let monsterDamageTook = 0;
            let playerDamageTook = 0;
            let skillchoice;
            let  manaMob = Math.floor(Math.random() * ( this.getVariable("parameters").maxSp.end - this.getVariable("parameters").maxSp.start ))+ this.getVariable("parameters").maxSp.start;
            console.log(manaMob);
            let count = 1;
            let sp_regenerate =0
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
                        monsterDamageTook = player.param.str - this.getVariable("parameters").dex.start;
                        //Damage that the player will take
                        playerDamageTook = this.getVariable("parameters").str.start * 2 - player.param.dex;

                    }
                    else { //Skills
                        let skillUsed: SkillOptions = player.skills[skillchoice?.value];
                        console.log("Skill :" + skillUsed.name);
                        
                        if (skillUsed.power != undefined && skillUsed.variance != undefined && skillUsed.hitRate && skillUsed.spCost) {
                            if(player.sp-skillUsed.spCost >= 0) {
                                player.sp -= skillUsed.spCost;
                                
                                let alt = Math.random() * 1;
                                if (alt <= skillUsed?.hitRate) {
                                    monsterDamageTook = ((skillUsed.power + (Math.round(Math.random() * (2 * skillUsed.variance) - skillUsed.variance))) / 10) * player.level;
                                    console.log("Skill damage :" + monsterDamageTook);
                                }
                                console.log("Skill costed SP :" + skillUsed.spCost);
                                console.log("Player SP: " + player.sp);
                            }else {
                                await player.showText("Tu as plus de mana");
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
                    sp_regenerate = Math.round(Math.random() * (playerSpRegener.end-playerSpRegener.start)) + playerSpRegener.start;
                    player.sp += sp_regenerate;
                    console.log("Regenerated SP: " + sp_regenerate);
                    count++;
                    console.log(" ");
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
                    await player.changeMap(mapDepart);
                    player.teleport({ x: 3517, y: 1110, z: 0 });
                    await player.showText("Vous avez gagner")
                }

                console.log(" ")
            }
            Combats.isHeDead(player, mapDepart);
            this.setVariable("pv", this.getVariable("parameters").maxHp.start)
        }
    }
    return Monster;
}