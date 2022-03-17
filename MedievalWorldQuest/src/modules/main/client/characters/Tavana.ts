import { Spritesheet, Animation, Direction } from '@rpgjs/client'

@Spritesheet({
    id: 'tavana', // id (mandatory)
    image: require('./assets/Tavana.png'), // relative path of image
    framesWidth: 3, // number of frames of the image across the width
    framesHeight: 1 , // number of frames of the image across the height
    width: 288, // width of image
    height: 110, // height of image
    textures: {
        [Animation.Stand]: {
            animations: direction => [[ {time: 0, frameX: 0, frameY: 0 } ]]
        },
    }
})
export class TavanaSprite {}
