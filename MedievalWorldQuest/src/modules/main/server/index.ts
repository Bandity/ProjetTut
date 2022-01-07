import { RpgServer, RpgModule } from '@rpgjs/server'
import  Maps  from './maps/'
import { player } from './player'

@RpgModule<RpgServer>({
    maps: [
        Maps.CiteOnirique,
        Maps.MenestrelTown,
        Maps.MaisonZoneDepMap,
        Maps.Eglise_carte
    ],
    player
})
export default class RpgServerEngine { }
