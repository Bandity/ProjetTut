import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { INT } = Presets
@Skill({  
    name: "Monde_de_tenebre",
    description: 'Compétence 3eme du prêtre',
    spCost: 180,
    power: 400,
    variance: 400, // soit le sort fait 0 degat soit il fait des degats enormes
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 10,
 }
})
export class MondeDeTenebre {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}