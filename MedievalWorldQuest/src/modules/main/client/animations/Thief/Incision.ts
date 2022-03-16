import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 5 ; i++) {
        for (let j=0 ; j < 5 ; j++) {
            array.push({ time: k * 10, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'incision',
    image: require('../assets/thief/incision.png'),
    framesWidth: 5,
    framesHeight: 5,
    width: 944,
    height: 944,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.3, 1],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class Incision {}