import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { ATK,AGI } = Presets
@Skill({  
    name: 'Hirondelle_Noire',
    description: 'Compétence de base du guerrier',
    spCost: 10,
    power: 100,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [ATK]: 2,
      [AGI]: 2
 }
})
export class HirondelleNoire {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
