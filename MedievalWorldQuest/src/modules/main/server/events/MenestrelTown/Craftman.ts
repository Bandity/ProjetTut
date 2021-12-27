import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MenestrelTownSpeech'
@EventData({
    name: 'Craftman',
    mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Craftman extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('craftman')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        let push = 0;
        if (player._class != null && (player._class.name === "Warrior" || player._class.name === "Thief")){
            for (let msg of speech.textCraftmanGoodClasses) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            if (push === 0){
                await this.moveRoutes([Move.right(),Move.tileLeft(1)]);
                await this.moveRoutes([Move.down()]);
                push++;
            }
            
        }
        else {
            for (let msg of speech.textCraftmanNotGoodClasses) {
                await player.showText(msg, {
                talkWith: this
                })
            }
        }
    }


}



