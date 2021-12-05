import { RpgEvent, EventData, RpgPlayer} from "@rpgjs/server";
import { BattleManager } from "@rpgjs/server/lib/Player/BattleManager";
import {player} from "../player";
import  {Monster} from "../database/monsters/Enemy";
class Combats{
    @BattleManager.applyDamage(Monster,null);
}
export{Combats}
