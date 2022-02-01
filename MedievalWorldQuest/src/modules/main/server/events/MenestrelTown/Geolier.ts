import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/MenestrelTownSpeech'
import { Talisman_Guilde } from '../../database/items/Talisman_Guilde'
import { Talisman_Institut } from '../../database/items/Talisman_Institut'
@EventData({
    name: 'geolier',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Geolier extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('soldat1')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        let push = 0;
        if (player.getVariable("geolierQ1") == 0 && (player.getItem(Talisman_Guilde).nb >= 1 || player.getItem(Talisman_Institut).nb >= 1)) {
            for (let msg of speech.textGeolierEnd) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable('geolierQ1', 1)
            await this.moveRoutes([Move.left(),Move.tileLeft(1)]);
            await this.moveRoutes([Move.down()]);
        }

        else if (player.getVariable('geolierQ1')!=1) {
            for (let msg of speech.textGeolierStart) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable('geolierQ1', 0)
        }

        else {
            for (let msg of speech.textGeolierClassic) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
        }

    }


}
