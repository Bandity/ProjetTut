import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'
import Tilesets  from './maps/'

import Musics from './sounds'
import Characters from './characters'
import Monsters  from './characters'
import  Animations  from './animations/Animations'

import hpbar from '../../../assets/hpbar/client/gui/hpbar.vue';
import { ShieldAnimations } from './animations/ShieldAnimation'
import { Surt_spell } from './animations/Surt_spell'

@RpgModule<RpgClient>({
    spritesheets: [
        Tilesets.TilesetsMenestrelTown,
        Tilesets.TilesetsMaisonJoueur,
        Tilesets.TilesetsCiteOnirique, 
        Tilesets.TilesetsEglise,
        Tilesets.TilesetsForge,
        Tilesets.TilesetsSous_sol,
        Tilesets.TilesetsMontagneChione,
        Tilesets.TilesetsCombats.CombatCiel,
        Tilesets.TilesetsCombats.CombatEgout,
        Tilesets.TilesetsCombats.CombatMontagne,

        ShieldAnimations,
        // PRETRE //
        Animations.Pretre.DarkLight,
        Animations.Pretre.MondeDeTenebre,
        Animations.Pretre.LitanieDivine,
        Animations.Pretre.FauxDAnkou,
        //MAGE //
        Animations.Mage.Ouragan,
        Animations.Mage.MorsureDuFroid,
        Animations.Mage.CoeurDeGlace,
        Animations.Mage.BouleDeFeu,
        //ASSASSIN
        Animations.Thief.Incision,
        Animations.Thief.Hemorragie,
        Animations.Thief.RoncesNoires,
        //GUERRIER
        Animations.Warrior.CroixSanglante,
        Animations.Warrior.JugementDivin,
        Animations.Warrior.PointeFuneste,

        Surt_spell,

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