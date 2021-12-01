import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'
const { ATK } = Presets
@Skill({  
    name: 'Boule_de_feu',
    description: 'Boule de feu basique',
    spCost: 10,
    power: 100,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [ATK]: 2
 }
})
export class Fire {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
