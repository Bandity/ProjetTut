import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MontagneChioneSpeech'
@EventData({
    name: 'Andre',
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Andre extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('oldMan1')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        for (let msg of speech.textAndre) {
            await player.showText(msg, {talkWith: this })  
        }
    }
}

