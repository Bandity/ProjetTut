import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { INT } = Presets
@Skill({  
    name: 'Morsure du froid',
    description: 'Compétence 2nde du mage',
    spCost: 30,
    power: 400,
    variance: 50,
    hitRate: 0.7,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 4
 }
})
export class MorsureDuFroid {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
