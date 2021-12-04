import { Class } from '@rpgjs/database'
import  MageSpell  from '../skills/Mage/index'

@Class({
    name: 'Mage',
    equippable: [

    ],
    skillsToLearn: [
        { level: 1, skill: MageSpell.BouleDeFeu },
        { level: 3, skill: MageSpell.MorsureDuFroid },
        { level: 5, skill: MageSpell.Ouragan },
        { level: 8, skill: MageSpell.CoeurDeGlace }
    ]
})
export class Mage {
   
}