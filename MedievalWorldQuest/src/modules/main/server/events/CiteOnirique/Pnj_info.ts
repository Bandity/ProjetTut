import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/CiteOniriqueSpeech'


@EventData({
    name: 'Pnj-info',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Pnj_info extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.speed = 2
        this.setGraphic('moderator')
    }

    async onAction(player: RpgPlayer) {
        for (let msg of speech.textPnjInfo) {
            await player.showText(msg, {
                talkWith: this
            })
        }
        if (player.getVariable('moderator_speech') == null) { // mouvement unique
            player.setVariable('moderator_speech', 1);
            await player.moveRoutes([Move.right(), Move.tileRight(1)])
            await this.moveRoutes([Move.down(), Move.tileDown(1)]);
            await this.moveRoutes([Move.left(), Move.tileLeft(2)]);
            await this.moveRoutes(Move.down());
        }
    }
}