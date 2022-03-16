import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 1 ; i++) {
        for (let j=0 ; j < 5 ; j++) {
            array.push({ time: k * 15, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'dark_light',
    image: require('../assets/pretre/dark_light.png'),
    framesWidth: 5,
    framesHeight: 1,
    width: 174,
    height: 266,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.3, 1],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class DarkLight {}

