import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../database/dialogue/ZoneDepSpeech'
@EventData({
    name: 'Witch',
    mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Witch extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('witch')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        let push = 0;
        if (player._class != null && (player._class.name === "Mage" || player._class.name === "prest")){
            for (let msg of speech.textWitchGoodClasses) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            if (push === 0){
                await this.moveRoutes([Move.right(),Move.tileRight(1)]);
                await this.moveRoutes([Move.down()]);
                push++;
            }
            
        }
        else {
            for (let msg of speech.textWitchNotGoodClasses) {
                await player.showText(msg, {
                talkWith: this
                })
            }
        }
    }


}



