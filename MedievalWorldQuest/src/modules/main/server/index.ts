import { RpgServer, RpgModule } from '@rpgjs/server'
import { MaisonZoneDepMap } from './maps/maisonZoneDep'
import { ZoneDepartMap } from './maps/zoneDepart'
import { player } from './player'

@RpgModule<RpgServer>({
    maps: [
        ZoneDepartMap,
        MaisonZoneDepMap
    ],
    player
})
export default class RpgServerEngine { }
