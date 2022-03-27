import { Spritesheet, Animation, Direction,RpgSprite,Presets } from '@rpgjs/client'


@Spritesheet({
    id: 'stele',
    image: require('./assets/stele.png'),
    width: 180,
    height: 249,
    framesWidth: 3,
    framesHeight: 4,
})
export class Stele  { }