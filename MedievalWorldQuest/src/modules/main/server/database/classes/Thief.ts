import { Class } from '@rpgjs/database'
import ThiefSpell  from '../skills/thief/index'

@Class({
    name: 'Assassin',
    equippable: [

    ],
    skillsToLearn: [
        { level: 1, skill: ThiefSpell.Incision }, 
        { level: 3, skill: ThiefSpell.Hemorragie },
        { level: 5, skill: ThiefSpell.RoncesNoires },
        { level: 8, skill: ThiefSpell.Hecatombe }
    ]
})
export class Thief {
   
}