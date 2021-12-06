import { RpgEvent, EventData, RpgPlayer,Move } from '@rpgjs/server'
import {speech} from '../database/dialogue/ZoneDepSpeech'


@EventData({
    name: 'Barde_1',
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Barde_1 extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.speed = 5
        this.frequency = 200
        this.setGraphic('barde')
        //this.moveRoutes([Move.towardPlayer(player)]);
    }

    async onAction(player: RpgPlayer) {
        for (let msg of speech.textBarde) {
            await player.showText(msg, {
                talkWith: this
            })
        }
       // here, the controls on the player
    }
    /*
    static async cinematique(player: RpgPlayer){
        let texts = [
            "Salut ... ? Tu m'as l'air complètement perdu, dis-moi ! La ville est assez grande, fais attention !",
            "Au pire, n'oublies pas que tu as des panneaux dissimulés un peu partout dans la ville pour t'indiquer où tu te situes.",
            "Allez, salut !"
        ]
        for (let msg of texts) {
            await player.showText(msg)
        }
    }
    */

}



