import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { INT } = Presets
@Skill({  
    name: 'Coeur de glace',
    description: 'Compétence ultime du mage',
    spCost: 150,
    power: 1000,
    variance: 100,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 15
 }
})
export class CoeurDeGlace {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
