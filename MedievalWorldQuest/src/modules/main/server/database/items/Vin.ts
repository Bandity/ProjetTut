import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Vin",
    name: 'Vin',
    description: "Vin au goût de vinaigre, utile pour les personnes n'ayant aucun goût",
    price: 30,
    hitRate: 1,
    consumable: false
})
export class Vin { }