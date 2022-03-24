import { RpgEvent, EventData, RpgPlayer,Move, EventMode } from '@rpgjs/server'
import {speech} from '../../database/dialogue/MontagneChioneSpeech'
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

@EventData({
    name: 'Cinematique',
    //mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Cinematique extends RpgEvent {
    async onInit(player: RpgPlayer) {
        this.setGraphic('invisible')
        this.speed = 2
        this.frequency = 0
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable("PDGlaces") != 1){
            await player.showAnimation("shield","default")
            await this.teleport({ x: 3873, y: 567890, z: 0 }); // on superpose les 2 boss
            await player.teleport({x: 3873, y: 3147, z:0})
  
            for (let msg of speech.textPrinceDesGlacesAvantMort) {
                await player.showText(msg, {talkWith: this })
            }
            await (timeout(1000))
            await this.setGraphic('Prince_des_glaces')
        }
       else {  // quand le boss est mort
            for (let msg of speech.textPrinceDesGlacesApresMort) {
                await player.showText(msg, {talkWith: this })  
            }
            await player.showAnimation("shield","default")
            player.teleport({x: 3873, y: 3247, z:0})
            await (timeout(1000))
            await this.showAnimation('surt_spell',"default");
            await (timeout(2000)) 
            await this.showAnimation('shield',"default");
            await (timeout(750)) 
            await this.setGraphic('invisible')
            await this.teleport(({x: 3873, y: 3125, z:0}))
            await this.showAnimation('shield',"default");
            await this.setGraphic('surt')
            await this.moveRoutes([Move.up()]);
            await (timeout(750))   
            let i = 0 
            for (let msg of speech.textSurt) {
                i++;
                if (i == 2) { 
                    await this.moveRoutes([Move.down()]);
                    await (timeout(1000))
                }
                await player.showText(msg)
                await this.moveRoutes([Move.up()]);
            }

            await this.showAnimation('shield',"default");
            await this.setGraphic('invisible')
            await(timeout(1000))
            await this.teleport(({x: 0, y: 0, z:0}))


            player.setVariable("PDGlaces", 2);

            
           }
       }
}
