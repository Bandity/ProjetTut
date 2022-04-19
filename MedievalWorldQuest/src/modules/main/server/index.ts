import { RpgServer, RpgModule } from '@rpgjs/server'
import  Maps  from './maps/'
import { player } from './player'
import databaseList from './database/items/'
@RpgModule<RpgServer>({
    maps: [
        Maps.CiteOnirique,
        Maps.MenestrelTown,
        Maps.MaisonJoueur,
        Maps.Eglise,
        Maps.Forge,
        Maps.Sous_sol,
        Maps.Grange,
        Maps.MontagneChione,

        Maps.CombatCiel,
        Maps.FaiblesseCiel,
        
        Maps.CombatEgout,
        Maps.SlimeEgout,
        Maps.SqueletteEgout,
        Maps.TavanaEgout,

        Maps.SqueletteMontagne,
        Maps.SqueletteSombreMontagne,
        Maps.FantomeMontagne,
        Maps.FantomeGlaceMontagne,
        Maps.Prince_des_Glaces_MontagneChione,

    ],
    database : databaseList,
    player,
})
export default class RpgServerEngine { }


