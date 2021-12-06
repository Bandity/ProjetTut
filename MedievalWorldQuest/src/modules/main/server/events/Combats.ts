import { RpgEvent, EventData, RpgPlayer} from "@rpgjs/server";

class Combats extends   RpgEvent {
    onAction(player: RpgPlayer, otherPlayer: RpgPlayer, skill:any){
        let damage = player.applyDamage(otherPlayer, skill);
        otherPlayer.hp = otherPlayer.hp - damage.damage;
        if (otherPlayer.hp <=0){
            otherPlayer.teleport("0,0");
        }
    }
}
export{Combats}
