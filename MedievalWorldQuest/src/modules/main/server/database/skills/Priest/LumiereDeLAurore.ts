import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { INT } = Presets
@Skill({  
    name: "Lumiere de l'aurore",
    description: 'Compétence 1 ère du prêtre',
    spCost: 15,
    power: 100,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 4,
 }
})
export class LumiereDeLAurore {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}