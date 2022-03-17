import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'Prince_des_Glace_MontagneChione',
    file: require('../tmx/CombatEgout.tmx'),
    name : 'Prince_des_Glace_MontagneChione',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'Prince_des_glaces',
            moveRandom: false
        }),
    ],
})
export class TavanaEgout extends RpgMap { }