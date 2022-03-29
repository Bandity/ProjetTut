import { RpgEvent, EventData, RpgPlayer, Move, EventMode } from '@rpgjs/server'
const timeout = (ms) =>  new Promise(resolve => setTimeout(resolve, ms));
export function PnjEntrainement(options: {
    text: string | string[],
    name: string,
    graphic: string,
    animation : string
}): object {
    @EventData({
        name: options.name, 
        hitbox: {
            width: 32,
            height: 16
        }
    })
    class PnjEntrainement extends RpgEvent {
        async onInit() {
            this.setGraphic(options.graphic)
            await this.moveRoutes(Move.up());
            while (true){
                await this.showAnimation(options.animation, 'default');
                await(timeout(2000));
            }
            
        }

        async onAction(player: RpgPlayer) {
            let text = options.text
            for (let msg of text) {
                await player.showText(msg)
            }
        }
    }
    return PnjEntrainement
}