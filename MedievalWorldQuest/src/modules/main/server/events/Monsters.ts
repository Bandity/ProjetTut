import { Enemy } from '@rpgjs/database'
import { RpgEnemy, Presets } from '@rpgjs/server'
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

export class Monster extends RpgEnemy {
    async onInit(player: RpgPlayer) {
        this.setGraphic("witch")
        //this.changeMap("MenestrelTown")
        this.teleport({x: 300, y: 300, z: 0})

    }
}   