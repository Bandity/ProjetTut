import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import { Tilesets } from './maps/zoneDepart'
import { TilesetMaison } from './maps/maisonZoneDep'
import { TownMusic } from './sounds'
import Characters from './characters'
import Monsters  from './characters'
import { ShieldAnimations } from './animations/ShieldAnimation'
import { DarkLightAnimation } from './animations/DarkLightAnimation'
import hpbar from '../../../assets/hpbar/client/gui/hpbar.vue';

@RpgModule<RpgClient>({ 
    spritesheets: [
        Tilesets,
        TilesetMaison,
        ShieldAnimations,
        DarkLightAnimation,
        ...Characters,
        ...Monsters,
    ],
    sprite,
    scenes: {
        map: sceneMap
    },
    sounds: [
        TownMusic
    ],
    gui: [
        hpbar
    ]

})
export default class RpgClientEngine {}