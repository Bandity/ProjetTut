import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 3 ; i++) {
        for (let j=0 ; j < 5 ; j++) {
            array.push({ time: k * 10, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'jugementDivin',
    image: require('../assets/warrior/jugementDivin.png'),
    framesWidth: 5,
    framesHeight: 3,
    width: 960,
    height: 576,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.3, 1],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class JugementDivin {}