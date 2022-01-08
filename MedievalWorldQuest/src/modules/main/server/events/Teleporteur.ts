import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'

const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

export function Teleporteur(options): object {
    const { name, nameMap, text } = options

    @EventData({
        name: options.name,
        hitbox: {
            width: 10,
            height: 10

        }
    })

    class Teleporteur extends RpgEvent {
        async onInit(player: RpgPlayer) {
        }

        async onPlayerTouch(player: RpgPlayer) {
                await player.changeMap(options.nameMap);

        }

    }
    return Teleporteur
}