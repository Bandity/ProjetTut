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
            graphic: 'fantome',
            moveRandom: false
        }),
    ],
})
export class FantomeMontagne extends RpgMap { }
 