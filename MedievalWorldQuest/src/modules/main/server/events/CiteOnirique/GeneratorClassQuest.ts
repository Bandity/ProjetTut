import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'

export function GeneratorClass(options:{
    name: string,
    graphic: string,
    classe: object,
    textInit : Array<string>,
    textAccept: Array<string>
    textReject : Array<string>
    animations : Array<string>
    tempsAnim : Array<number>

}): object {
    const { name,graphic,classe, textInit, textAccept, textReject, animations,tempsAnim } = options
    @EventData({
        name: name,
        //mode: EventMode.Scenario, 
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
            await player.showText(textInit[0], {
                talkWith: this
            });

            const choice = await player.showChoices(textInit[1], [
                { text: 'Oui', value: 'oui' },
                { text: 'Non', value: 'non' },
            ]);
            if (choice != null && choice.value == 'oui') {
                const choice2 = await player.showChoices("Choisir une fille ou un garçon ?", [
                    { text: 'Fille', value: 'f' },
                    { text: 'Garçon', value: 'g' },
                ]);
                if (choice2 != null && choice2.value == 'f') {
                    let graphicPerso = graphic.slice(0,graphic.length-1); // on prend le nom complet exemple mageF, on retire la lettre du sexe (la derniere) et on garde ca : mage
                    graphicPerso = graphicPerso.concat("F"); // on rajoute le sexe en 1 lettre majuscule : F si femme 
                    player.setGraphic(graphicPerso); // on change le visuel du perso
                }
                else if (choice2 != null && choice2.value == 'g') {
                    let graphicPerso = graphic.slice(0,graphic.length-1); // on prend le nom complet exemple mageF, on retire la lettre du sexe (la derniere) et on garde ca : mage
                    graphicPerso = graphicPerso.concat("G"); // on rajoute le sexe en 1 lettre majuscule : F si femme 
                    player.setGraphic(graphicPerso); // on change le visuel du perso
                }
                player.setClass(classe);
                player.setVariable("animations",animations);
                player.setVariable("tempsAnim",tempsAnim);
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
