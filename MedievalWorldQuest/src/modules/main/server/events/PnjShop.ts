import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

export function PnjShop(options: {
    name: string,
    graphic: string,
    items: Array<Object>,
    text: string
}):object {
    
    @EventData({
        name: options.name,
        hitbox: {
            width: 32,
            height: 16
        }
    })
     class Shop extends RpgEvent {
        onInit() {
            this.setGraphic(options.graphic);
        }
        async onAction(player: RpgPlayer) {
            await player.showText(options.text)
            const choice = await player.showChoices('Regarder les offres ?',[
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                await player.callShop(options.items)
            }
        }
    }
    return Shop;
}