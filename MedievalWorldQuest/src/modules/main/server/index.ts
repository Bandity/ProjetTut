import { RpgServer, RpgModule } from '@rpgjs/server'
import { ZoneDepartMap } from './maps/zoneDepart'
import { player } from './player'



@RpgModule<RpgServer>({
    player,
    maps: [
        ZoneDepartMap
    ],
    

    
})
export default class RpgServerEngine { }
