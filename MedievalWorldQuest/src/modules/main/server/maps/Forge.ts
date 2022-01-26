import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/Forge/index'

@MapData({
    id: 'Forge',
    file: require('./tmx/Forge.tmx'),
    name : 'Forge',       
    events :[ 
        events.Gordon,
        events.Maitre_Institut,
        events.Teleporteur({
        name: "sortie",
        nameMap: "MenestrelTown", 
        widthHitbox: 1000,
        teleportX: 3658,
        teleportY:1030
        }),
    ],
})
export class Forge extends RpgMap { }
