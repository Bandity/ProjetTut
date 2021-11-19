
import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        zoneDepart: require('./maps/assets/tuilesRpgMaker.png'),
        tuilesGlobale: require('./maps/assets/tuilesGlobale.png'),
        eauAnime: require('./maps/assets/eauAnime.png')
        // here, you can add other tileset
    }
})
export class Tilesets { }