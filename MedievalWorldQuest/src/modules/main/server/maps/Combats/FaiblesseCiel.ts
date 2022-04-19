import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'FaiblesseCiel',
    file: require('../tmx/CombatCiel.tmx'),
    name : 'FaiblesseCiel',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [], 
            graphic: 'Faiblesse',
            moveRandom: false
        }),
    ],
})
export class FaiblesseCiel extends RpgMap { }
