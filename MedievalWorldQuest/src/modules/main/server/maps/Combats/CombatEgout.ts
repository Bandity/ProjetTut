import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'CombatEgout',
    file: require('../tmx/CombatEgout.tmx'),
    name : 'CombatEgout',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'base',
            moveRandom: false
        }),
    ],
})
export class CombatEgout extends RpgMap { }
