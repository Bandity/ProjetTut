import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { STR, AGI } = Presets
@Skill({  
    name: "Hemorragie",
    description: "Compétence 2nde de l'assassin",
    spCost: 20,
    power: 50,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [STR]: 1,
      [AGI]: 4,
 }
})
export class Hemorragie {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
