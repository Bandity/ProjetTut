import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import { Tilesets } from './characters/zoneDepart'
import { TownMusic } from './sounds'
import Characters from './characters'

@RpgModule<RpgClient>({ 
    spritesheets: [
        Tilesets,
        ...Characters,
    ],
    sprite,
    scenes: {
        map: sceneMap
    },
    sounds: [
        TownMusic
    ]


})
export default class RpgClientEngine {}