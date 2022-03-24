import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        
    },
    width: 112,
    height: 22,
    ...RMSpritesheet(1, 4)
})
export class Monsters { }