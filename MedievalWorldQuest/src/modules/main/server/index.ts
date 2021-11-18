import { RpgServer, RpgModule } from '@rpgjs/server'
import { ZoneDepartMap } from './maps/zoneDepart'
import { player } from './player'



@RpgModule<RpgServer>({
    maps: [
        ZoneDepartMap
    ],
    player,

    
})
export default class RpgServerEngine { }
