import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import Tilesets  from './maps/'

import { TownMusic } from './sounds'
import Characters from './characters'
import Monsters  from './characters'
import { ShieldAnimations } from './animations/ShieldAnimation'
import { DarkLightAnimation } from './animations/DarkLightAnimation'
//import BarreDeVie from './gui/BarreDeVie.vue'

@RpgModule<RpgClient>({
    gui : [
        //BarreDeVie
    ],   
    spritesheets: [
        Tilesets.TilesetsMenestrelTown,
        Tilesets.TilesetMaison,
        Tilesets.TilesetsCiteOnirique, 
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


})
export default class RpgClientEngine {}