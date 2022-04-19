import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../../database/dialogue/EgoutSpeech'
@EventData({
    name: 'Surt',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 64,
        height: 64
    }
})
export class Surt extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('invisible')
        this.speed = 2
        this.frequency = 0
    }

    async onPlayerTouch(player: RpgPlayer) {
        if (player.getVariable("tavanaKill") != 1) return;
        else if (player.getVariable("surtQ1") != 1) {
            player.breakRoutes(); 
            await this.teleport({ x: 2145, y: 600, z: 0 })
            await this.moveRoutes(Move.left());

            this.showAnimation('shield', 'default');
            await this.setGraphic('surt')
            for (let msg of speech.textSurt) {
                await player.showText(msg)
            }
            this.showAnimation('shield', 'default');
            await this.setGraphic("invisible")
            player.setVariable("surtQ1", 1);
        }
       
    }
}



