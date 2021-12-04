import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { INT } = Presets
@Skill({  
    name: 'Boule_de_feu',
    description: 'Compétence de base du mage',
    spCost: 10,
    power: 250,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 4
 }
})
export class BouleDeFeu {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
