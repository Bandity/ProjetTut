import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/CiteOniriqueSpeech'


@EventData({
    name: 'maitreDesClasses',
    //mode : EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    },
})
 
export class MaitreClasses extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.speed = 1
        this.setGraphic('moderator')
    }

    async onAction(player: RpgPlayer) {
        if (player._class != null){
            for (let msg of speech.textMaitreClasses) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            if (player.getVariable('maitreClasses_speech') == null) { // mouvement unique
                player.setVariable('maitreClasses_speech', 1);
                player.exp+=51
                player.exp = 0
                await this.moveRoutes([Move.left(), Move.tileLeft(2)]);
                await this.moveRoutes(Move.down());
            } 
        }
        else { 
            await player.showText("Jeune héros, je te prie de bien vouloir aller choisir une vocation, viens me voir après.")
        }
    
    }
}