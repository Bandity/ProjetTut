import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Biere",
    name: 'Biere',
    description: 'Redonne 5 SP au joueur',
    price: 10,
    hitRate: 1,
    consumable: true
})
export class Biere { }