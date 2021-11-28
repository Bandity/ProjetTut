import { RpgEvent, EventData, RpgPlayer,Move } from '@rpgjs/server'

@EventData({
    name: 'Barde_1',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Barde_1 extends RpgEvent {
    onInit(player: RpgPlayer) {
        this.speed = 2
        this.frequency = 200
        this.setGraphic('barde')
        this.moveRoutes([ Move.tileRandom() ])
        //this.moveRoutes([Move.tileDown(2)]);

    }

    async onAction(player: RpgPlayer) {
        let texts = [
            "Salut ... ? Tu m'as l'air complètement perdu, dis-moi ! La ville est assez grande, fais attention !",
            "Au pire, n'oublies pas que tu as des panneaux dissimulés un peu partout dans la ville pour t'indiquer où tu te situes.",
            "Allez, salut !"
        ]
        for (let msg of texts) {
            await player.showText(msg, {
                talkWith: this
            })
        }
       // here, the controls on the player
    }
}


