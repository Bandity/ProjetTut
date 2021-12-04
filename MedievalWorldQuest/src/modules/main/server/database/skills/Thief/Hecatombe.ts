import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

@Skill({  
    name: "Hecatombe",
    description: "Compétence ultime de l'assasin",
    spCost: 100,
    power: 10000,
    variance: 0,
    hitRate: 0.2, // Une chance sur 5 de toucher , si toucher , tue tout les ennemies
    
    addStates: [],
    removeStates: [],
    elements: [],
})
export class Hecatombe {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
