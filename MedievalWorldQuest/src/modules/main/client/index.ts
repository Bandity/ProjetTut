import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import { Tilesets } from './characters/zoneDepart'

@RpgModule<RpgClient>({ 
    spritesheets: [
        Tilesets
    ],
    sprite,
    scenes: {
        map: sceneMap
    },

})
export default class RpgClientEngine {}