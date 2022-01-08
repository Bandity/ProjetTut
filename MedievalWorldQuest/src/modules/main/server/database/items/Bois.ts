import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Bois",
    name: 'Bois',
    description: 'Rondin de bois coupé par un bûcheron',
    price: 100,
    hitRate: 1,
    consumable: false
})
export class Bois { }