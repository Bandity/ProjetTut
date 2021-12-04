import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { INT } = Presets
@Skill({  
    name: "Faux_d'Ankou",
    description: 'Compétence 2nde du prêtre',
    spCost: 30,
    power: 200,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 5,
 }
})
export class FauxDAnkou {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
