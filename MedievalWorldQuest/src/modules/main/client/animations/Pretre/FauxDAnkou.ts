import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 12 ; i++) {
        for (let j=0 ; j < 1 ; j++) {
            array.push({ time: k * 7, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'faux_d_ankou',
    image: require('../assets/pretre/faux_d_ankou.png'),
    framesWidth: 6,
    framesHeight: 12,
    width: 680,
    height: 1608,
    opacity: 1,
    //anchor: [0.8, 0.5],
    anchor: [0.5, 1.7],
    textures: {
        default: {
            
            animations: [ to() ]
        }
    }
})
export class FauxDAnkou {}

