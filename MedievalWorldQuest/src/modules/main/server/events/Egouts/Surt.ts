import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/EgoutSpeech'
@EventData({
    name: 'Surt',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
 
    }
})
export class Surt extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('surt')
        this.speed = 2
        this.frequency = 0
        this.moveRoutes([Move.right()]);
    }

    async onAction(player: RpgPlayer) {
        for (let msg of speech.textSurt) {
            await player.showText(msg)
        }
    }
}



