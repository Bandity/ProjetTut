import { Enemy } from '@rpgjs/database'
import { RpgEnemy, Presets, RpgEvent } from '@rpgjs/server'
import { Shield } from '@rpgjs/starter-kit/src/server/database/armors/shield'
import { Sword } from '@rpgjs/starter-kit/src/server/database/weapons/sword'
import {RpgPlayer , EventData} from '@rpgjs/server'

const { MAXHP, STR } = Presets

@Enemy({
    name: 'Monster',
    graphic: 'witch',
    parameters: {
       [MAXHP]: { start: 540, end: 1000},
       [STR]: { start: 41, end: 1000 }
    },
    gain: {
        exp: 10,
        gold: 15
    },
    startingEquipment: []
})
@EventData({
    name: 'Monster',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Monster extends RpgEvent {
    async onInit(player: RpgPlayer) {
        
        this.setGraphic("witch")
        //this.changeMap("MenestrelTown")

    }
    async onAction(player: RpgPlayer){
        console.log("as")
        player.hp =-1;
    }
}   