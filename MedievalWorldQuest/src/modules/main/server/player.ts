import { RpgPlayer, RpgPlayerHooks, Control, Move } from '@rpgjs/server'
import { Mage } from './database/classes/Mage';
import { Warrior } from './database/classes/Warrior';
import { speech } from './database/dialogue/ZoneDepSpeech'
//import { Barde_1 } from './events/barde1ZoneDep'
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

export const player: RpgPlayerHooks = {

    async onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
        if (player._class != null){
            if (input == "Spell1") {
                if (player._class.name == "Mage")await player.showAnimation('dark_light','default');
            }
            if (input == "Spell2") {
                if (player._class.name == "Mage") await player.showAnimation('shield','default');
            }
        }
    },
    async onConnected(player: RpgPlayer) {
        player.name = "Test"
        player.setClass(Mage);
        console.log(player._class.skillsToLearn[0])
        console.log(player._class.skillsToLearn[1])
        console.log(player._class.skillsToLearn[2])
        console.log(player._class.skillsToLearn[3])
        await player.setHitbox(20, 16) 
        await player.setGraphic('heroBlueHair');
        await player.changeMap('zoneDepart');
    },

    async onJoinMap(player: RpgPlayer){
        await timeout(500);
        for (let msg of speech.textcinematic1) {
            await player.showText(msg);
        }
    }
    

    
    
}