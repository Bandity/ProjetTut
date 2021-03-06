import { Enemy } from '@rpgjs/database'
import { RpgEnemy, Presets } from '@rpgjs/server'

const { MAXHP, STR } = Presets

@Enemy({
    name: 'Monster',
    graphic: 'slime',
    parameters: {
       [MAXHP]: { start: 50, end: 1000},
       [STR]: { start: 20, end: 1000 }
    },
    gain: {
        exp: 10,
        gold: 15
    },
    startingEquipment: []
})
export class Monster extends RpgEnemy {

}