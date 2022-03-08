import { RpgMap, MapData } from '@rpgjs/server'
import { PnjGlobal } from '../../events/pnjGlobal';

@MapData({
    id: 'CombatCiel',
    file: require('../tmx/CombatCiel.tmx'),
    name : 'CombatCiel',       
    events :[ 
        PnjGlobal({ 
            name: 'Monster',
            text: [],
            graphic: 'base',
            moveRandom: false
        }),
    ],
})
export class CombatCiel extends RpgMap { }
