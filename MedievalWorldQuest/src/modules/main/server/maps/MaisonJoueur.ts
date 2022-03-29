import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/MaisonJoueur/'

@MapData({
    id: 'MaisonJoueur',
    file: require('./tmx/MaisonJoueur.tmx'),
    name : 'MaisonJoueur',       
    events :[ 
        events.Teleporteur({
            name: "sortie",
            nameMap: "MenestrelTown", 
        }),
        events.Stairs({
            name: "stairsUp",
            teleportX: 5,
            teleportY: 1190
        }),
        events.Stairs({
            name: "stairsDown",
            teleportX: 50,
            teleportY: 110
        }),
        events.Mere,
        events.Lettre,
        events.RedLine,

    ],
})
export class MaisonJoueur extends RpgMap { }
