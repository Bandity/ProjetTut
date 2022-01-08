import { Item } from '@rpgjs/database'

@Item({  
    id: "potionSoin",
    name: 'Potion de soin',
    description: 'Redonne 20 PV au joueur',
    price: 200,
    hpValue: 20,
    hitRate: 1,
    consumable: true
})
export class PotionSoin { }