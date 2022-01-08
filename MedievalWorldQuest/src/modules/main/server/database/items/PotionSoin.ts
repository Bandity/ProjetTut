import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: 'Potion de soin',
    name: 'Potion de soin',
    description: 'Redonne 20 PV au joueur',
    price: 200,
    hpValue: 20,
    hitRate: 1,
    consumable: true
})
export class PotionSoin { }