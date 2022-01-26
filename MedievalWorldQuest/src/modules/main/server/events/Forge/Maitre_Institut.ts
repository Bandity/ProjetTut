import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/ForgeSpeech'
@EventData({
    name: 'Maitre_Institut',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Maitre_Institut extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('bucheron')
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("maitre_institutQ1") != 1) {
            for (let msg of speech.textMaitre_InstitutStart) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable("maitre_institutQ1", 1)
        }
        else {
            for (let msg of speech.textMaitre_InstitutClassique) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
        }
    }
}



