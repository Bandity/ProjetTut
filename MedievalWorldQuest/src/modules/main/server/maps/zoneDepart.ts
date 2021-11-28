import { RpgMap, MapData } from '@rpgjs/server'
import { Barde_1 } from '../events/barde1ZoneDep'
import { SteleEvent } from '../events/stele'
import { PnjGlobal } from '../events/pnjGlobal'

@MapData({
    id: 'zoneDepart',
    file: require('./tmx/zoneDepart.tmx'),
    name : 'zoneDepart',
    events: [
        Barde_1,
        PnjGlobal({ 
            name: 'Pnj-2',
            text: "Cette ville me paraît si belle mais la vallée qui l'entoure est désolante.",
            graphic: 'female13',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-3',
            text: ["Je ne me lasserais jamais de voir cette place, elle est le c\u0153ur de cette ville.",
            "La voir me rapelle ce qu'il s'est passé il y a 50 ans ...", 
            "... Oh? Tu ne sais pas ce qu'il s'est passé ? Tu devrais aller lire les stèles dissimulées un peu partout dans la ville, un morceau de la tragédie y est écrit." 
            ],
            graphic: 'female19',
            moveRandom: true
    }),
        SteleEvent({
            name: 'Stele_1',
        }),
    ],
    sounds: ['town']
})
export class ZoneDepartMap extends RpgMap { }
