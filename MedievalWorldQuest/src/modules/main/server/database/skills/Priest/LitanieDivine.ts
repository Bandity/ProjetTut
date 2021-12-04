import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { INT } = Presets
@Skill({  
    name: "Litanie_divine",
    description: 'Compétence ultime du prêtre',
    spCost: 200,
    power: 100, // permettrais de soigner toute la vie de tout le monde donc pas vraiment de power
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [INT]: 5,
 }
})
export class LitanieDivine {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}