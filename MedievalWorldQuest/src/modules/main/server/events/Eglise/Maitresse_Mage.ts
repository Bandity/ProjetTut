import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/EgliseSpeech'
@EventData({
    name: 'Maitresse_Mage',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Maitresse_Mage extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('maitresse_mage')
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("maitresse_mageQ1") != 1) {
            for (let msg of speech.textMaitresse_MageStart) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable("maitresse_mageQ1", 1)
        }
        else {
            for (let msg of speech.textMaitresse_MageClassique) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
        }
    }
}



