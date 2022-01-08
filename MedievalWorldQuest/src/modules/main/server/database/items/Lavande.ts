import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Lavande",
    name: 'Lavande',
    description: "Fleur de lavande, utilisée fréquemment dans la cuisine ou dans les potions",
    price: 10,
    hitRate: 1,
    consumable: false
})
export class Lavande { }