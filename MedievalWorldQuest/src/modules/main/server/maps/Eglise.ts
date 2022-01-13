import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/Eglise/index'

@MapData({
    id: 'Eglise',
    file: require('./tmx/Eglise.tmx'),
    name : 'Eglise',       
    events :[ 
        events.Teleporteur({
        name: "sortie",
        nameMap: "MenestrelTown", 
        widthHitbox: 1000,
        teleportX: 493,
        teleportY:1110
        }),
    ],
})
export class Eglise extends RpgMap { }
