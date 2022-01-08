import { RpgServer, RpgModule } from '@rpgjs/server'
import  Maps  from './maps/'
import { player } from './player'
import databaseList from './database'
@RpgModule<RpgServer>({
    maps: [
        Maps.CiteOnirique,
        Maps.MenestrelTown,
        Maps.MaisonZoneDepMap,
        Maps.Eglise
    ],
    database : databaseList,
    player
})
export default class RpgServerEngine { }


