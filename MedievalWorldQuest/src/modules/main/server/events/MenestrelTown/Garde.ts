import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'

export function Garde(options): object {
    const { name, text, moove } = options

    @EventData({
        name: options.name,
        hitbox: {
            width: 32,
            height: 16
        }
    })
    class Garde extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('soldat1')
        console.log(options.moove);
        if (options.moove){
            this.speed = options.speed || 1
            this.frequency = options.frequency || 200
            this.infiniteMoveRoute([ Move.tileRandom() ])
        }
    }

    async onAction(player: RpgPlayer) {
        await player.showText(text, { talkWith: this }); // Si on refuse de donner l'objet
        }     
    }
    return Garde;
}



