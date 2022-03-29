import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 4 ; i++) {
        for (let j=0 ; j < 3 ; j++) {
            array.push({ time: k * 10, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'bouleDeFeu',
    image: require('../assets/mage/bouleDeFeu.png'),
    framesWidth: 3,
    framesHeight: 4,
    width: 95,
    height: 128,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.1, 4.5],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class BouleDeFeu {}