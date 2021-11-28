import { RpgPlayer, RpgPlayerHooks, Control, Move } from '@rpgjs/server'
import { speech } from './database/dialogue/ZoneDepSpeech'
//import { Barde_1 } from './events/barde1ZoneDep'
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));

export const player: RpgPlayerHooks = {

    async onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
            
        }
    },
    async onConnected(player: RpgPlayer) {
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