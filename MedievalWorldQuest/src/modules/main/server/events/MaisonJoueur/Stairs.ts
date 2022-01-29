import { RpgEvent, EventData, RpgPlayer, EventMode } from '@rpgjs/server'

export function Stairs(options): object {
    const { name, teleportX, teleportY } = options

    if (options.widthHitbox == undefined) options.widthHitbox = 10;

    @EventData({
        name: options.name,
        //mode : EventMode.Scenario,
        hitbox: {
            width: options.widthHitbox,
            height: 10
        },
    })

    class Stairs extends RpgEvent {
        async onPlayerTouch(player: RpgPlayer) {
            await player.teleport({ x: teleportX, y: teleportY, z:0});
        }

    }
    return Stairs
}