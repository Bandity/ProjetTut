import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MenestrelTownSpeech'
import Combats from '../Combats'
@EventData({
    name: 'combatTest',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class CombatTest extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('craftman')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
       player.hp =-1
       Combats.isHeDead(player)

    }


}


