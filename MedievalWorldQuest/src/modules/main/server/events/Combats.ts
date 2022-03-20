import { RpgEvent, RpgPlayer} from "@rpgjs/server";

class Combats extends   RpgEvent {
    onAction(player: RpgPlayer, otherPlayer: RpgPlayer, skill:any){
        let damage = player.applyDamage(otherPlayer, skill);
        otherPlayer.hp = otherPlayer.hp - damage.damage;
        if (otherPlayer.hp <=0){
            otherPlayer.teleport({x:300,y:300,z:0});
            otherPlayer.hp = Math.round(player.param.maxHp*0.1);
        }
    }

    async isHeDead(player: RpgPlayer, map: string){
        if(player.hp<=0){
            await player.changeMap(map);
            //player.teleport({x:300,y:300,z:0})
            player.hp = Math.round( player.param.maxHp * 0.10)
            await player.showText("Vous êtes mort")
            
        }
    }
}
export default new Combats()
