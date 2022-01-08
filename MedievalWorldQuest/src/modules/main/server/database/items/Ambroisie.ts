import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Ambroisie",
    name: 'Ambroisie',
    description: 'Redonne 600 PV au joueur',
    price: 1000,
    hpValue: 600,
    hitRate: 1,
    consumable: true
})
export class Ambroisie { }