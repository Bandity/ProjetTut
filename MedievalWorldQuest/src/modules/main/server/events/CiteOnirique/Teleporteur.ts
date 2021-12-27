import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'
import { speech } from '../../database/dialogue/MenestrelTownSpeech';
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

@EventData({
    name: 'Teleporteur',
    hitbox: {
        width: 10,
        height: 10

    }
})
export class Teleporteur extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.speed = 2
    }

    async onPlayerTouch(player: RpgPlayer) {
            await player.changeMap("MenestrelTown");
            await timeout(1000);
            for (let msg of speech.textcinematic1) {
                await player.showText(msg);
            }
    }
}