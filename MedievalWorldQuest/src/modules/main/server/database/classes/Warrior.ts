//import { Class } from '@rpgjs/database'
import { Class } from '../../../../../@types'
import SpellWarrior  from '../skills/Warrior/index'


@Class({
    name: 'Guerrier',
    equippable: [

    ],
    skillsToLearn: [
        { level: 1, skill: SpellWarrior.HirondelleNoire },
        { level: 3, skill: SpellWarrior.CroixSanglante },
        { level: 5, skill: SpellWarrior.PointeFuneste },
        { level: 8, skill: SpellWarrior.JugementDivin }
    ],


})
export class Warrior {
   
}