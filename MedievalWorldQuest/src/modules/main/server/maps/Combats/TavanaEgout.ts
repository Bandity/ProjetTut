import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'TavanaEgout',
    file: require('../tmx/CombatEgout.tmx'),
    name : 'TavanaEgout',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'tavana',
            moveRandom: false
        }),
    ],
})
export class TavanaEgout extends RpgMap { }
