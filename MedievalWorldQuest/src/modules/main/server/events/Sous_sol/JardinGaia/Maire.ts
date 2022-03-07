import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../../database/dialogue/EgoutSpeech'
@EventData({
    name: 'Maire',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Maire extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('femme_agee')
        this.frequency = 0

    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("maireGaiaVille") != 1) {
            for (let msg of speech.textMaire) {
                await player.showText(msg)
            }
            player.setVariable("maireGaiaVille", 1);
        }
       
    }
}