import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/Eglise/index'

@MapData({
    id: 'Eglise',
    file: require('./tmx/Eglise.tmx'),
    name : 'Eglise',       
    events :[ 
        events.Teleporteur({
        name: "egliseSortie",
        nameMap: "MenestrelTown", 
        }),
    ],
})
export class Eglise extends RpgMap { }
