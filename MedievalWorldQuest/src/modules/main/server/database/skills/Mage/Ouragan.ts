import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { INT } = Presets
@Skill({  
    name: 'Ouragan',
    description: 'Compétence 3 du mage',
    spCost: 60,
    power: 600,
    variance: 100,
    hitRate: 0.5,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 8
 }
})
export class Ouragan {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
