import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import Tilesets  from './maps/'

import Musics from './sounds'
import Characters from './characters'
import Monsters  from './characters'
import { ShieldAnimations } from './animations/ShieldAnimation'
import { DarkLightAnimation } from './animations/DarkLightAnimation'

import hpbar from '../../../assets/hpbar/client/gui/hpbar.vue';

@RpgModule<RpgClient>({
    spritesheets: [
        Tilesets.TilesetsMenestrelTown,
        Tilesets.TilesetsMaisonJoueur,
        Tilesets.TilesetsCiteOnirique, 
        Tilesets.TilesetsEglise,
        Tilesets.TilesetsForge,
        Tilesets.TilesetsSous_sol,
        Tilesets.TilesetsCombats.CombatCiel,
        Tilesets.TilesetsCombats.CombatEgouts,

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
        Musics.CiteOniriqueMusic,
        Musics.TownMusic       
    ],
    gui: [
        hpbar
    ],

})
export default class RpgClientEngine {}