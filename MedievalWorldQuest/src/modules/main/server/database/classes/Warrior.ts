import { Class } from '@rpgjs/database'
import { Fire } from '../skills/fire'

@Class({
    name: 'Warrior',
    equippable: [

    ],
    skillsToLearn: [
        { level: 1, skill: Fire }
    ]
})
export class Warrior {
   
}