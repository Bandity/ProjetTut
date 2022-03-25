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
        Maps.MontagneChione,
        Maps.CombatCiel,
        Maps.CombatEgout,
        Maps.TavanaEgout,
        Maps.SlimeEgout,
        Maps.SqueletteEgout,
        Maps.Prince_des_Glaces_MontagneChione,

    ],
    database : databaseList,
    player,
})
export default class RpgServerEngine { }


