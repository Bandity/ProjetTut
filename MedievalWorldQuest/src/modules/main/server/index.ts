import { RpgServer, RpgModule } from '@rpgjs/server'
import  Maps  from './maps/'
import { player } from './player'
import databaseList from './database/items/'
@RpgModule<RpgServer>({
    maps: [
        Maps.CiteOnirique,
        Maps.MenestrelTown,
        Maps.MaisonZoneDepMap,
        Maps.Eglise,
        Maps.Forge,
        Maps.Sous_sol

    ],
    database : databaseList,
    player,
})
export default class RpgServerEngine { }


