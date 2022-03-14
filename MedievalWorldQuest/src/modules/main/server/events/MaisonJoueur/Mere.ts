import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MaisonJoueurSpeech'
@EventData({
    name: 'Mere',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Mere extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('mere')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("lettreQ1") != 1){
            for (let msg of speech.textMereQ1) {
                await player.showText(msg, {talkWith: this })
            }
            player.setVariable("mereQ1", 1);
        }
       else { 
           if (player.getVariable("mereQ1") != 2){
            for (let msg of speech.textMereQ2) {
                await player.showText(msg, {talkWith: this })
            }
            player.setVariable("mereQ1",2 );
           }
           else {
            for (let msg of speech.textMereBase) {
                await player.showText(msg, {talkWith: this })
            }
           }
       }
    }


}


