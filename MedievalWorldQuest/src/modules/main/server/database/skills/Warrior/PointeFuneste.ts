import { RpgPlayer } from '@rpgjs/server'
import { Skill } from '@rpgjs/database'
import { Presets } from '@rpgjs/server'

const { ATK,PDEF,SDEF } = Presets
@Skill({  
    name: 'Pointe Funeste',
    description: 'Compétence 3 du guerrier',
    spCost: 35,
    power: 350,
    variance: 10,
    hitRate: 1,
    
    addStates: [],
    removeStates: [],
    elements: [],
    coefficient: {
      [ATK]: 2,
      [PDEF]: 1,
      [SDEF]: 1,
 }
})
export class PointeFuneste {
    onLearn(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onForget(player: RpgPlayer) {

    }
}
