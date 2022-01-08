import { RpgPlayer } from '@rpgjs/server'
import { Item } from '@rpgjs/database'

@Item({  
    id: 'Potion de mana',
    name: 'Potion de mana',
    description: 'Redonne 10 SP au joueur',
    price: 50,
    hitRate: 1,
    consumable: true
})
export class PotionMana {

    onUse(player: RpgPlayer){
        player.sp+= 20;
    }
 }