import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../../database/dialogue/EgoutSpeech'
@EventData({
    name: 'GardeJardins',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    }
})
export class  GardeJardins extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('man4')
        this.frequency = 0
        await this.moveRoutes(Move.up());

    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("gardeJardinsGaia") != 1) {
            for (let msg of speech.textGardeJardins) {
                await player.showText(msg)
            }
            player.setVariable("gardeJardinsGaia", 1);
        }
       
    }
}