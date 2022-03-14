import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MaisonJoueurSpeech'
@EventData({
    name: 'Lettre',
    //mode: EventMode.Scenario,

    hitbox: {
        width:32,
        height: 16
    }
})
export class Lettre extends RpgEvent {
    async onInit(player: RpgPlayer) {
       
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("mereQ1") == null){
            for (let msg of speech.textLettreCachete) {
                await player.showText(msg, {talkWith: this})
            }
        }
        else {
            for (let msg of speech.textLettreDecachete) {
                await player.showText(msg, {talkWith: this })
                player.setVariable("lettreQ1", 1)
            }
        }
           
    }


}


