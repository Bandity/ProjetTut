import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Talisman_Institut",
    name: "Talisman de l'Institut",
    description: "Talisman de l'institut des armes, prouvant que vous n'êtes plus un enfant et que vous pouvez aller dans des lieux dangereux.",
    price: 1500,
    hitRate: 1,
    consumable: false
})
export class Talisman_Institut { }