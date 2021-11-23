import { RpgPlayer, RpgPlayerHooks, Control } from '@rpgjs/server'
//const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
export const player: RpgPlayerHooks = {


    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
            
        }
    },
    async onConnected(player: RpgPlayer) {
        await player.setHitbox(20, 16) 
        await player.setGraphic('heroBlueHair');
        await player.changeMap('zoneDepart')
   },
    
    

    
    
}