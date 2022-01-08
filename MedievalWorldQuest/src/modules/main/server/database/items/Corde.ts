import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Corde",
    name: 'Corde',
    description: "Corde étonnamment solide, peut supporter le poid d'au moins une personne ",
    price: 350,
    hitRate: 1,
    consumable: false
})
export class Corde { }