//import { Class } from '@rpgjs/database'
import { Class } from '../../../../../@types'
import PriestSpell  from '../skills/Priest/index'

@Class({
    id: "Priest",
    name: 'Prêtre',
    equippable: [

    ],
    skillsToLearn: [
        { level: 1, skill: PriestSpell.LumiereDeLAurore },
        { level: 3, skill: PriestSpell.FauxDAnkou },
        { level: 5, skill: PriestSpell.MondeDeTenebre },
        { level: 8, skill: PriestSpell.LitanieDivine }
    ]
})
export class Priest {
   
}