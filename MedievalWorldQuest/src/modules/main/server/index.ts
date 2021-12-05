import { RpgServer, RpgModule } from '@rpgjs/server'
import { ZoneDepartMap } from './maps/zoneDepart'
import { player } from './player'
import { Monster } from './database/monsters/Enemy';


@RpgModule<RpgServer>({
    maps: [
        ZoneDepartMap
    ],
    player
    

    
})
export default class RpgServerEngine { }
