import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'

export function Skin(options: {
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
    class Skins extends RpgEvent {
        async onInit(player: RpgPlayer) {
            this.setGraphic(options.graphic)
        }

        async onAction(player: RpgPlayer) {
            const choice = await player.showChoices('Choisir cette apparence', [
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
        ]);
        if (choice != null && choice.value == 'oui') player.setGraphic(options.graphic)
        }
    }
        return Skins;
}