import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'CombatMontagne',
    file: require('../tmx/CombatMontagne.tmx'),
    name : 'CombatMontagne',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'squeletteSombre',
            moveRandom: false
        }),
    ],
})
export class SqueletteSombreMontagne extends RpgMap { }
 