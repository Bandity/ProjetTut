
import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
//import { Enemy} from '../../../../../@types'
import { EventData, EventMode } from '@rpgjs/server'
import { Presets, RpgPlayer,RpgEvent } from '@rpgjs/server'
import { Enemys } from './Enemys'
import Combats from '../Combats'

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
                maxHp: { start: 540, end: 1000 },
                maxSp: { start: 534, end: 5500 },
                str: { start: 41, end: 1000 },
                int: { start: 36, end: 1000 },
                dex: { start: 54, end: 564 },
                agi: { start: 58, end: 582 },

            }
        )
        this.setVariable("pv", Math.floor(Math.random() * (1000-540) + 540))
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
        
        while (this.getVariable("pv") > 0 && player.hp > 0) {
            if(this.getVariable("pv") <=0){
                player.teleport({x:3517,y:1094,z:0});
                player.showNotification("Tu as ganger")
            }
            const choice = await player.showChoices("Attack ou Defense", 
            [
                {text: "Attack", value: 'att'}, 
                {text: "Defense", value: 'def'}
            ])
            if(choice?.value === "att") {
                console.log(this.getVariable("pv"))
                console.log(Math.round(player.param.str * Math.random()* (0.90 - 0.1) + 0.1))
                let monsterDamage = this.getVariable("parameters").dex.start -Math.round(player.param.str * Math.random()* (1 - 0.1) + 0.1)
                this.setVariable("pv", this.getVariable("pv") );
                let damage= (player.param.dex) - Math.round(this.getVariable("parameters").str.start * Math.random() * (1 - 0.10) + 0.1);
                if (damage < 0) {
                    player.hp +=0 ;
                }else{
                    player.hp -= damage;
                }
                if (monsterDamage >0) {
                    this.setVariable("pv", this.getVariable("pv")- monsterDamage);
                }
                console.log("Monster HP: " + this.getVariable("pv"))
                console.log("Player hp: " + player.hp)
            }
            else if (choice?.value === "def"){
                let damage= (player.param.def*2) - Math.round(this.getVariable("parameters").str * Math.random() * (1   - 0.10) + 0.1);
                if (damage < 0) {
                    player.hp +=0 ;
                }else{
                    player.hp -= damage;
                }
                console.log("Player hp: " + player.hp)
            }
        }
        Combats.isHeDead(player, this)
        this.teleport({x:3517,y:1094,z:0})
        
    }
}