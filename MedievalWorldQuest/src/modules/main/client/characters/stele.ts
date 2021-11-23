import { Spritesheet, Animation, Direction,RpgSprite,Presets } from '@rpgjs/client'


@Spritesheet({
    id: 'stele',
    image: require('./assets/stele.png'),
    width: 180,
    height: 249,
    framesWidth: 3,
    framesHeight: 4,
    textures: {
        [Animation.Stand]: {
            animations: direction => [[ {time: 0, frameX: 0, frameY: direction == Direction.Up ? 0 : 1 } ]]
        }
    }
})
export class Stele  { }