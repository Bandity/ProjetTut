import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { STR,AGI } = Presets
@Skill({  
    name: "Incision",
    description: "Compétence 1ere de l'assassin ",
    spCost: 10,
    power: 75,
    variance: 0,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
        [STR]: 2,
        [AGI]: 3,
 }
})
export class Incision {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
