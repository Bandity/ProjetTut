
import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        maison1: require('./assets/maison1.png'),
        mur: require('./assets/mur.png'),
        Testforgerie: require('./assets/Testforgerie.png'),
        tuilesGlobale: require('./assets/tuilesGlobale.png'),
        // here, you can add other tileset
    }
})
export class TilesetsMaisonJoueur { }