import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
@EventData({
    name: 'TeleporteurBoss',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class TeleporteurBoss extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('invisible')
    }

    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Voulez-vous retourner au village ?', [
            await { text: 'Oui', value: 'oui' },
            await { text: 'Non', value: 'non' },
        ]);
        if (choice != null && choice.value == 'oui') {
            player.showAnimation("shield","default") 
            await (timeout(500))  
            player.teleport({ x: 1022, y: 1913, z: 0})
        }
    }
} 