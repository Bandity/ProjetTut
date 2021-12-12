import { RpgPlayer, RpgPlayerHooks, Control, Move } from '@rpgjs/server'
import { Mage } from './database/classes/Mage';
import { Warrior } from './database/classes/Warrior';
import { speech } from './database/dialogue/ZoneDepSpeech'
import { Potion } from './database/items/potion'
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
        player.addItem(Potion);
        player.setClass(Mage);
        await player.setHitbox(20, 16) 
        await player.setGraphic('heroBlueHair');
        await player.changeMap('citeOnirique');
        console.log(player.position.x);
        console.log(player.position);
        
    },

    async onJoinMap(player: RpgPlayer){
        await timeout(500);
        player.gui('barre_de_vie').open() // Here, open the HUD after loading the map
        for (let msg of speech.textcinematic1) {
            await player.showText(msg);
        }
    }
    

    
    
}