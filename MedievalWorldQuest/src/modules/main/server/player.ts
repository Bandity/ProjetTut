import { RpgPlayer, RpgPlayerHooks, Control, Move } from '@rpgjs/server'
import { speech } from './database/dialogue/MenestrelTownSpeech'
import { Potion } from './database/items/potion'

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
        player.gold += 6000;
        player.speed = 2;
        player.name = "Olgus"
        player.addItem(Potion);
        await player.setHitbox(20, 16) 
        await player.setGraphic('heroBlueHair');
        if (player.getVariable("maitreClasses_speech") == null) { // debut du jeu
            await player.setGraphic('base');
            //await player.changeMap('citeOnirique');
            await player.changeMap('MenestrelTown');
        }

    },

    async onJoinMap(player: RpgPlayer){
        await player.breakRoutes();
        //await timeout(500);
        //player.gui('hpbar').open()
        for (let msg of speech.textcinematic1) {
            //await player.showText(msg);
        }
    },
}