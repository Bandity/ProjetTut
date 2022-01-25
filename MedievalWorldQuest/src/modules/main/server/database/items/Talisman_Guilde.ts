import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Talisman_Guilde",
    name: 'Talisman de la Guilde',
    description: "Talisman de la Guilde des Mages, prouvant que vous n'êtes plus un enfant et que vous pouvez aller dans des lieux dangereux.",
    price: 1500,
    hitRate: 1,
    consumable: false
})
export class Talisman_Guilde { }