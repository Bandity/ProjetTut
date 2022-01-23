
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
                agi: { start: 58, end: 582 }
            }
        )
        this.parameters = this.getVariable("parameters");
        this.hp = 540
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
        this.hp = 540
        while (this.hp > 0 || player.hp > 0) {
            Combats.isHeDead(this)
            Combats.isHeDead(player)
            const choice = await player.showChoices("Attack ou Defense", 
            [
                {text: "Attack", value: 'att'}, 
                {text: "Defense", value: 'def'}
            ])
            if(choice?.value === "att") {
                console.log(player.param.str);
                this.hp -= Math.round(player.param.str * Math.random()* (0.10 - 0.01) + 0.1);
                console.log(this.hp);
        }
        }
        
    }
}