import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
//import { Enemy} from '../../../../../@types'
import { EventData, EventMode } from '@rpgjs/server'
import { Presets, RpgPlayer,RpgEvent } from '@rpgjs/server'
import { Enemys } from './Enemys'
import Combats from '../Combats'
import { RpgGui } from '@rpgjs/client'
import { Choice } from '@rpgjs/server/lib/Gui/DialogGui'

const { MAXHP, STR } = Presets
/*
@Enemy({
    name: 'Monster',
    graphic: 'bird',
    parameters: {
       [MAXHP]: { start: 540, end: 1000},
       [STR]: { start: 41, end: 1000 }
    },
    gain: {
        exp: 10,
        gold: 15
    },
    startingEquipment: [Sword, Shield]
})*/
@EventData({
    name: 'Monster',
    hitbox: {
        width: 32,
        height: 16
    },
    mode: EventMode.Scenario
})
export class Monster extends RpgEvent {
    async onInit(player: RpgPlayer){
        this.setGraphic("chara")
        this.setVariable("gain", {exp: 10, gold: 15})
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
        this.setVariable("pv", Math.floor(Math.random() * (600-440) + 540))
        this.getVariable("parameters");
    }
    async onAction(player: RpgPlayer) {
        await player.showText("Je vais te niquer")
        const choice = await player.showChoices("Quoi FDP tu veux te battre ?", [
            { text: 'Lest Go', value: 'oui' },
            { text: 'Fuck you', value: 'non' },
        ]);
        if(choice?.value === "oui"){
            this.teleport({x: 50,y: 50,z: 0});
            player.teleport({x: 50,y: 100,z: 0});
            await this.start(player);
        }
        else{
            player.teleport({x: 300,y: 300,z: 0});
            await player.showNotification("TU ES MORT");
            this.teleport({x:3517,y:1094,z:0})
        }
    }


    async start(player: RpgPlayer) {
        let monsterDamageTook =0;
        let playerDamageTook = 0;
        while (this.getVariable("pv") > 0 && player.hp > 0) {
            let choice = await player.showChoices("Attack ou Defense", 
            [
                {text: "Attack", value: 'att'}, 
                {text: "Defense", value: 'def'}
            ])
            if(choice?.value === "att") {
                if (player.skills.length >0){
                    let skills : Array<Choice> = [];
                    for (let i = 0; i < player.skills.length; i++) {
                        skills[i] = {
                            text: player.skills[i].name,
                            value: i
                        } 
                    }
                    skills[skills.length] = {text: "Basic Attack", value: skills.length}
                    choice =await player.showChoices("Quelle skill ?",skills)

                }
                if(choice?.value == player.skills.length){
                    monsterDamageTook = player.param.str - this.getVariable("parameters").dex.start  ;
                    this.setVariable("pv", this.getVariable("pv") );
                    playerDamageTook = this.getVariable("parameters").str.start - player.param.dex
                }
                if (monsterDamageTook >0) {
                    this.setVariable("pv", (this.getVariable("pv")- monsterDamageTook));
                }
                if (playerDamageTook >0) {
                    player.hp =0
                }
                console.log("Monster HP: " + this.getVariable("pv"))
                console.log("Player hp: " + player.hp)
            }
            else if (choice?.value === "def"){
                let damage= Math.round(this.getVariable("parameters").str.start * Math.random() * (1   - 0.10) + 0.1)-(player.param.dex*2) ;
                if (damage < 0) {
                    player.hp +=0 ;
                }else{
                    player.hp -= damage;
                }
                console.log("Player hp: " + player.hp)
            }
            if(this.getVariable("pv") <=0){
                player.teleport({x:3517,y:1110,z:0});
                player.showNotification("Tu as ganger")
            }
        }
        Combats.isHeDead(player)
        this.teleport({x:3517,y:1094,z:0})
        this.setVariable("pv", this.getVariable("parameters").maxHp.start)
    }
}