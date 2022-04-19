import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { STR, AGI } = Presets
@Skill({  
    name: "Ronces Noires",
    description: "Compétence 3eme de l'assassin",
    spCost: 60,
    power: 300,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [STR]: 3,
      [AGI]: 4,
 }
})
export class RoncesNoires {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
