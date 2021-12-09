import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'

export function Monster(options: {
    name: string,
    graphic: string,
}):object {
    @EventData({
        name: options.name, 
        hitbox: {
            width: 32,
            height: 16
        }
    })
    class Monsters extends RpgEvent {
        async onInit(player: RpgPlayer) {
            this.setGraphic(options.graphic)
        }
    }
        return Monsters;
}