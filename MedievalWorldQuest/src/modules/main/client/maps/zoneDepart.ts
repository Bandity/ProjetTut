
import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        zoneDepart: require('./assets/tuilesRpgMaker.png'),
        tuilesGlobale: require('./assets/tuilesGlobale.png'),
        eauAnime: require('./assets/eauAnime.png')
        // here, you can add other tileset
    }
})
export class Tilesets { }