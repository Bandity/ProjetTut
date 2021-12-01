import { Spritesheet } from '@rpgjs/client'
 const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
const to = () => {
    const array: any = []
    let k = 0;

    for (let i=0 ; i < 4 ; i++) {
        for (let j=0 ; j < 1 ; j++) {
            array.push({ time: k * 20, frameX: j, frameY: i})
            k++
        }
    }
    return array
}

@Spritesheet({
    id: 'dark_light',
    image: require('./assets/dark_light.png'),
    framesWidth: 1,
    framesHeight: 5,
    width: 300,
    height: 160,
    opacity: 1,
    anchor: [0.8, 0.5],
    textures: {
        default: {
            /*animations: [
                [ 
                    { time: 0, frameX: 0, frameY: 0 },
                    { time: 20, frameX: 0, frameY: 1 } ,
                    { time: 40, frameX: 0, frameY: 2 } ,
                    { time: 60, frameX: 0, frameY: 3 },
                    { time: 80, frameX: 0, frameY: 4},
                    //
                    

                    
                    // etc...
                ]
            ] */
            
            animations: [ to() ]
        }
    }
})
export class DarkLightAnimation {}

