import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/MaisonJoueurSpeech'
@EventData({
    name: 'RedLine',
    //mode: EventMode.Scenario,

    hitbox: {
        width: 150,
        height: 16
    }
})
export class RedLine extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('invisible')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("mereQ1") == null) {
            for (let msg of speech.textRedLineMereQ1) {
                await player.showText(msg, { talkWith: this })
            }
        }
        else if (player.getVariable("lettreQ1") != 1) {
            for (let msg of speech.textRedLineLettreNonLue) {
                await player.showText(msg, { talkWith: this })
            }
        }
        else if (player.getVariable("mereQ1") != 2) {
            for (let msg of speech.textRedLineMereQ1_2) {
                await player.showText(msg, { talkWith: this })
            }
        }
    }
    async onPlayerTouch(player: RpgPlayer){
        if (player.getVariable("mereQ1") == 2){
            this.teleport({x:0,y:0,z:0});
        }
    }
}

