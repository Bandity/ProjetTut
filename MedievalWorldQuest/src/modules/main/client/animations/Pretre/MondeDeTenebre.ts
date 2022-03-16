import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 1 ; i++) {
        for (let j=0 ; j < 6 ; j++) {
            array.push({ time: k * 10, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'monde_de_tenebre',
    image: require('../assets/pretre/monde_de_tenebre.png'),
    framesWidth: 6,
    framesHeight: 1,
    width: 407,
    height: 63,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.3, 1],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class MondeDeTenebre {}

