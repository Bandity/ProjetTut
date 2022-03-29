import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'

const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

export function Teleporteur(options): object {
    const { name, nameMap, text, widthHitbox,teleportX, teleportY } = options

    if (options.widthHitbox == undefined) options.widthHitbox = 10;

    @EventData({
        name: options.name,
        //mode : EventMode.Scenario,
        hitbox: {
            width: options.widthHitbox,
            height: 10
        },
    })

    class Teleporteur extends RpgEvent {
        async onInit(player: RpgPlayer) {
        }

        async onPlayerTouch(player: RpgPlayer) {
            /*
            if (player.getVariable("nbTp") != 1){
                for (let i = 0; i < player.getVariable("listSkill").length;i++){
                    player.forgetSkill(player.getVariable("listSkill")[i])
                }
                player.exp +=51
                player.setVariable("nbTp", 1)
                console.log(player.skills)

            }
            */
            if (teleportX != undefined || teleportY != undefined){
                await player.changeMap(options.nameMap,{ x: teleportX, y: teleportY, z:0});
            }
            else {
                await player.changeMap(options.nameMap);
                await timeout(1000)  
            }
            

        }

    }
    return Teleporteur
}