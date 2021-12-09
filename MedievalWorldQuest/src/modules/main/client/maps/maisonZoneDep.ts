
import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        maison1 : require('./assets/maison1.png'),
        maison2 : require ('./assets/maison2.png'),
        mur : require ('./assets/mur.png'),
        mur2 : require ('./assets/mur2.png'),
        // here, you can add other tileset
    }
})
export class TilesetMaison { }