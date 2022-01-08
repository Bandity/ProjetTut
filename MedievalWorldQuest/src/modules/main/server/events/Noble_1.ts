/*  Class inutile pour le moment puisque ItemRequiredQuest fait exactement pareil que celle ci
mais permet d'avoir une id�e beaucoup plus claire de comment fonctionne les qu�tes 
*/

import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../database/dialogue/MenestrelTownSpeech'
import { PotionSoin } from '../database/items/PotionSoin';

@EventData({
    name: 'Noble_1',
    mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    
    }
})
export class Noble_1 extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('noble')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("quest1") == 2){ // si quete deja fini
            return 
        }
        if (player.getVariable("quest1") == 1){ // si quete en cours
            if (player.getItem(PotionSoin) != null){ // si le joueur possede l'objet demande
                await (player.showText("...!!! Oh tu en as trouvé une ! Voudrais-tu me la donner, s'il te plaît !"));
                const choice = await player.showChoices("Donner la potion de soin ?", [
                    { text: 'Oui', value: 'oui' },
                    { text: 'Non', value: 'non' },
                ]);
                if (choice != null && choice.value == 'oui') { // si on donne l'objet, on valide la quete
                    player.removeItem(PotionSoin,1);
                    player.setVariable("quest1",2) // on dit que la quete est terminee
                    player.gold += 300; // la recompense est de l'experience et de l'argent
                    player.exp +=15;
                    let reward = ["Vous avez reçu : 300 or", "Vous avez reçu : 50 points d'experience"] 
                    for (let msg of speech.textEndQuest1) {
                        await player.showText(msg, {talkWith: this }) // on affiche les remerciements
                    }

                    for (let msg of reward) {
                        await player.showText(msg, {talkWith: this }) // on affiche les recompenses
                    }
                }
                else await player.showText("Ha...Bon bah une prochaine fois...", { talkWith: this }); // Si on refuse de donner l'objet

            }
            else  await player.showText("N'oublies pas de m'apporter une potion de soin !", { talkWith: this }); // Si on n'a pas l'objet 
        }
         
        if (player.getVariable("quest1") == null || player.getVariable("quest1") == 0){
            player.setVariable("quest1",0); 

            for (let msg of speech.textStartQuest1) {
                await player.showText(msg, {
                talkWith: this
                })
            }
            const choice = await player.showChoices('Voulez-vous accepter cette quête ?', [
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                player.setVariable("quest1",1)
            }
        } // Si on n'a pas encore obtenu la quete
    }
}



