import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        slime: require('./assets/slime.png'),
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Monsters { }