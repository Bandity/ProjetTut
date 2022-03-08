import { Spritesheet } from '@rpgjs/client'

@Spritesheet({
    images: {
        cloudCity: require('../assets/cloudCity.png'),
        fond: require('../assets/bg_bluesky.png'),
        nuage1: require('../assets/bg_cloud1.png'),
        nuage2: require('../assets/bg_cloud2.png'),
        // here, you can add other tileset
    }
})
export class CombatCiel { }