import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { ATK } = Presets
@Skill({  
    name: 'Croix Sanglante',
    description: 'Compétence 2nde du guerrier',
    spCost: 22,
    power: 200,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [ATK]: 5,
 }
})
export class CroixSanglante {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
