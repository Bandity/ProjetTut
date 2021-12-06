import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        slime: require('./assets/slime.png'),
    },
    width: 112,
    height: 22,
    ...RMSpritesheet(1, 4)
})
export class Monsters { }