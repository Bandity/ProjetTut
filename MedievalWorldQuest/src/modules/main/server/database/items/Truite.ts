import { Item } from '@rpgjs/database'
import { RpgPlayer } from '@rpgjs/server';

@Item({  
    id: "Truite",
    name: 'Truite',
    description: "Poisson à peu près frais. Attention, à ne pas confondre avec la truie !",
    price: 220,
    hitRate: 1,
    consumable: false
})
export class Truite { }