import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { ATK } = Presets
@Skill({  
    name: 'Jugement Divin',
    description: 'Compétence ultime du guerrier',
    spCost: 50,
    power: 500,
    variance: 30,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [ATK]: 2
 }
})
export class JugementDivin {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
