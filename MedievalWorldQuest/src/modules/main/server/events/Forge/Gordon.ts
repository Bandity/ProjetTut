import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/ForgeSpeech'
import { Talisman_Institut} from '../../database/items/Talisman_Institut'

@EventData({
    name: 'Gordon',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16

    }
})
export class Gordon extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('man3')
        await this.moveRoutes([Move.right()])
    }

    async onAction(player: RpgPlayer) {

        if (player.getVariable("maitre_institutQ1") != 1) { // si dialogue de la maitresse pas encore lancee
            await player.showText(speech.textGordonClassique[0], {
                talkWith: this
            })
        }
        else if (player.getVariable("gordonQ1") != 1) { // si le joueur n'a jamais parlee a aimee apres avoir parler a la maitresse 
            for (let msg of speech.textGordonStart) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable("gordonQ1", 1);
        }
        else {
            const choice = await player.showChoices(speech.textGordonClassique[1], [
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                await player.callShop([Talisman_Institut])
            }
        }
    }
}


