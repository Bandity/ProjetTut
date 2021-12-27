import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'

export function GeneratorClass(options): object {
    const { name,graphic,classe, textInit, textAccept, textReject } = options

    @EventData({
        name: name,
        hitbox: {
            width: 32,
            height: 16

        }
    }) 
    class Class extends RpgEvent {
        async onInit(player: RpgPlayer) {
            this.setGraphic(graphic)
            this.speed = 2
            this.frequency = 0
        }

        async onAction(player: RpgPlayer) {
            if (player._class != null && player._class.name == classe.name) { // si le joueur est deja un mage
                for (let msg of textAccept) {
                    await player.showText(msg, {
                        talkWith: this
                    })
                }
                return;
            }
            await player.showText(textInit[0], {
                talkWith: this
            });

            const choice = await player.showChoices(textInit[1], [
                { text: 'Oui', value: 'oui' },
                { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                player.setGraphic(graphic);
                player.setClass(classe);
                for (let msg of textAccept) {
                    await player.showText(msg, {
                        talkWith: this
                    })
                }
            }
            else {
                for (let msg of textReject) {
                    await player.showText(msg, {
                        talkWith: this
                    })
                }
            }


        }

    }
    return Class;
}
