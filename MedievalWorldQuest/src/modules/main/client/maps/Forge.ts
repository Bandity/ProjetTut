
import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        Armure: require('./assets/Armure.png'),
        forge1: require('./assets/forge1.png'),
        forge2: require('./assets/forge2.png'),
        maison2: require('./assets/maison2.png'),
        forge_tuiles: require('./assets/Testforgerie.png'),
        // here, you can add other tileset
    }
})
export class TilesetsForge { }