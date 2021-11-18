import { RpgPlayer, RpgPlayerHooks, Control } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            //player.callMainMenu()
            player.changeMap('zoneDepart');
            //player.setGraphic('hero');
        }
    }
    
   /*
    async onConnected(player: RpgPlayer) {
        await player.changeMap('zoneDepart');

    }
    */
    
}