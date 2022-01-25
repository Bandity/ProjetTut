import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
import { speech } from '../../database/dialogue/EgliseSpeech'
import { Talisman_Guilde } from '../../database/items/Talisman_Guilde'

@EventData({
    name: 'Aimee',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 48

    }
})
export class Aimee extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('youngLady')
    }

    async onAction(player: RpgPlayer) {

        if (player.getVariable("maitresse_mageQ1") != 1) { // si dialogue de la maitresse pas encore lancee
            await player.showText(speech.textAimeeClassique[0], {
                talkWith: this
            })
        }
        else if (player.getVariable("aimeeQ1") != 1) { // si le joueur n'a jamais parlee a aimee apres avoir parler a la maitresse 
            for (let msg of speech.textAimeeStart) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            player.setVariable("aimeeQ1", 1);
        }
        else {
            const choice = await player.showChoices(speech.textAimeeClassique[1], [
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                await player.callShop([Talisman_Guilde])
            }
        }
    }
}



