import { RpgSound } from '@rpgjs/client/lib/Sound/RpgSound';
import { RpgPlayer, RpgPlayerHooks, Control, Move } from '@rpgjs/server'
import { Thief } from './database/classes/Thief';
import { Mage } from './database/classes/Mage';
import { speech } from './database/dialogue/MenestrelTownSpeech'
import { PotionSoin } from './database/items/PotionSoin'


import { BouleDeFeu }  from './database/skills/Mage/BouleDeFeu'


const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
var movement = false;
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
            if (input == "Speed") {
                if(!movement){
                    movement = true;
                    player.speed = player.speed*2
                }else{
                    movement = false;
                    player.speed = 4
                }
            }
        }
    },
    async onConnected(player: RpgPlayer) {
        player.gold += 6000;
        player.speed =2;
        player.name = "Olgus"
        player.setClass(Thief)
        //player.skills.push(BouleDeFeu);
        //console.log(player.skills[0])

        player.addItem(PotionSoin);
        await player.setHitbox(20, 16) 
        if (player.getVariable("maitreClasses_speech") == null) { // debut du jeu
            //await player.setGraphic('base');
            await player.setGraphic('mageF');
            //await player.changeMap('citeOnirique');
            //await player.changeMap('MenestrelTown');
            await player.changeMap('Eglise')
            //await player.changeMap('Sous_sol');
            //await player.changeMap('Forge');
        }

    },

    async onJoinMap(player: RpgPlayer){
        //await timeout(500);
        //player.gui('hpbar').open()
        for (let msg of speech.textcinematic1) {
           // await player.showText(msg);
        }
    },
}