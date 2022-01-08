import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'

export function QuestSimple(options): object {
    const { name, textStart, textEnd, itemRequired,quantity, graphic, gain } = options

    @EventData({
        name: options.name,
        mode: EventMode.Scenario,
        hitbox: {
            width: 32,
            height: 16
        }
    })
    class ItemRequiredQuest extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic(graphic)
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable(options.name)== 2){ // si quete deja fini
            await player.showText(textEnd[4]);
            return 
        }
        console.log(player.getVariable(name))
        if (player.getVariable(name) == 1){ // si quete en cours
            if (player.getItem(itemRequired) != null && player.getItem(itemRequired).nb == options.quantity){ // si le joueur possede l'objet demande
                await (player.showText(textEnd[2]));
                const choice = await player.showChoices("Donner " +  itemRequired.name  + "?", [
                    { text: 'Oui', value: 'oui' },
                    { text: 'Non', value: 'non' },
                ]);
                if (choice != null && choice.value == 'oui') { // si on donne l'objet, on valide la quete
                    player.removeItem(itemRequired,1);
                    player.setVariable(name,2) // on dit que la quete est terminee
                    player.gold += gain.gold; // la recompense est de l'experience et de l'argent
                    player.exp +=gain.exp;
                    let reward = [ gain.gold + " or", gain.exp +" points d'experience"] 
                    await player.showText(textEnd[3], {talkWith: this }) // on affiche les remerciements

                    for (let msg of reward) {
                        await player.showText("Vous avez reçu : " + msg, {talkWith: this }) // on affiche les recompenses
                    }
                }
                else await player.showText(textEnd[0], { talkWith: this }); // Si on refuse de donner l'objet

            }
            else  await player.showText(textEnd[1], { talkWith: this }); // Si on n'a pas l'objet 
        }
         
        if (player.getVariable(name) == null || player.getVariable(name) == 0){
            player.setVariable(name,0); 

            for (let msg of textStart) {
                await player.showText(msg, {
                talkWith: this
                })
            }
            const choice = await player.showChoices('Voulez-vous accepter cette quête ?', [
                await { text: 'Oui', value: 'oui' },
                await { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                player.setVariable(name,1)
            }
        } // Si on n'a pas encore obtenu la quete
         
        }     
    }
    return ItemRequiredQuest;
}



