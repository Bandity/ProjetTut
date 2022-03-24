import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'SlimeEgout',
    file: require('../tmx/CombatEgout.tmx'),
    name : 'SlimeEgout',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'slimeVert',
            moveRandom: false
        }),
    ],
})
export class SlimeEgout extends RpgMap { }
 