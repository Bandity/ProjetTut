import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'
import { speech } from '../../database/dialogue/CiteOniriqueSpeech'
import  BattleManager from "../../../client/gui/guiParDefault/src/battle/main.vue"


@EventData({
    name: 'Pnj-combat',
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Pnj_combat extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.speed = 2
        this.setGraphic('moderator')
    }

    async onAction(player: RpgPlayer) {
        /*
        for (let msg of speech.textPnjInfo) {
            await player.showText(msg, {
                talkWith: this
            })
        }*/
        if (player.getVariable('combat_speech') == null) { // mouvement unique
            player.setVariable('combat_speech', 1);
        }
        
        player.changeMap("Eglise");
        player.callMainMenu
    }
}

