import { RpgMap, MapData } from '@rpgjs/server'
import {PnjGlobal} from '../../events/pnjGlobal'
@MapData({
    id: 'Prince_des_Glaces_MontagneChione',
    file: require('../tmx/CombatMontagnes.tmx'),
    name : 'Prince_des_Glaces_MontagneChione',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'Prince_des_glaces',
            moveRandom: false
        }),
    ],
})
export class Prince_des_Glaces_MontagneChione extends RpgMap { }