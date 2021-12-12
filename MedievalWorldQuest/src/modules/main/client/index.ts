import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import Tilesets  from './maps/'

import { TownMusic } from './sounds'
import Characters from './characters'
import Monsters  from './characters'
import { ShieldAnimations } from './animations/ShieldAnimation'
import { DarkLightAnimation } from './animations/DarkLightAnimation'
<<<<<<< HEAD
//import BarreDeVie from './gui/BarreDeVie.vue'
=======
import hpbar from '../../../assets/hpbar/client/gui/hpbar.vue';
>>>>>>> a9f730212fdc9cfdd3005ff1fea1261c2e1aedd8

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
<<<<<<< HEAD
=======
    gui: [
        hpbar
    ]
>>>>>>> a9f730212fdc9cfdd3005ff1fea1261c2e1aedd8

})
export default class RpgClientEngine {}