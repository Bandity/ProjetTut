import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'SqueletteEgout',
    file: require('../tmx/CombatEgout.tmx'),
    name : 'SqueletteEgout',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'squeletteSansEpee',
            moveRandom: false
        }),
    ],
})
export class SqueletteEgout extends RpgMap { }
 