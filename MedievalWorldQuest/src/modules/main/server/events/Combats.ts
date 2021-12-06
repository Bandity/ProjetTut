import { RpgEvent, EventData, RpgPlayer} from "@rpgjs/server";

class Combats extends   RpgEvent {
    onAction(player: RpgPlayer, otherPlayer: RpgPlayer, skill:any){
        player.applyDamage(otherPlayer, skill);
    }
}
export{Combats}
