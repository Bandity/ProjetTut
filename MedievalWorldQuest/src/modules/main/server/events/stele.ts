import { RpgEvent, EventData, RpgPlayer, Direction } from '@rpgjs/server'

export function SteleEvent(options): object {

    const { name, text, gain } = options

    @EventData({
        name,
        hitbox: {
            width: 64,
            height: 32,
        }
    })
    class SteleEventClass extends RpgEvent {
        onInit(player: RpgPlayer) {
            this.setGraphic('stele')
        }
        async onAction(player: RpgPlayer) {
            if (player.getVariable(name)) {
                return
            }
            if (player.getDirection() != Direction.Up) {
                return
            }
            
            let texts = [
                "Ville des Ménestrels"
            ]
            for (let msg of texts) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
    
        }
    }
    return SteleEventClass

}