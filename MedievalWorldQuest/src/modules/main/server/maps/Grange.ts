import { RpgMap, MapData } from '@rpgjs/server'
import { Stairs } from '../events/MaisonJoueur/Stairs'
import { PnjGlobal } from '../events/pnjGlobal'
import { Teleporteur } from '../events/Teleporteur'

@MapData({
    id: 'Grange',
    file: require('./tmx/Grange.tmx'),
    name: 'Grange',
    events: [
        Stairs({
            name: "escalierUp",
            teleportX: 18,
            teleportY: 170
        }),
        Stairs({
            name: "escalierDown",
            teleportX: 125,
            teleportY: 2030
        }),
        Teleporteur({
            name: "sortie",
            nameMap: "Sous_sol",
            teleportX: 444,
            teleportY: 3310
        }),
        // rez de chaussee
        PnjGlobal({
            name: "Pnj-Glob-1",
            text: [],
            moveRandom: true,
            graphic: 'man1'
        }),
        PnjGlobal({
            name: "Pnj-Glob-2",
            text: [],
            moveRandom: true,
            graphic: 'barde'
        }),
        PnjGlobal({
            name: "Pnj-Glob-3",
            text: [],
            moveRandom: true,
            graphic: 'man2'
        }),
        PnjGlobal({
            name: "Pnj-Glob-4",
            text: [],
            moveRandom: true,
            graphic: 'priestG'
        }),
        PnjGlobal({
            name: "Pnj-Glob-5",
            text: [],
            moveRandom: true,
            graphic: 'witch'
        }),
        PnjGlobal({
            name: "Pnj-Glob-6",
            text: [],
            moveRandom: true,
            graphic: 'bucheron'
        }),
        PnjGlobal({
            name: "Pnj-Glob-7",
            text: [],
            moveRandom: true,
            graphic: 'priestF'
        }),
        PnjGlobal({
            name: "Pnj-Glob-8",
            text: [],
            moveRandom: true,
            graphic: 'whiteCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-9",
            text: [],
            moveRandom: false,
            graphic: 'mageG'
        }),
        PnjGlobal({
            name: "Pnj-Glob-10",
            text: [],
            moveRandom: false,
            graphic: 'noble'
        }),
        PnjGlobal({
            name: "Pnj-Glob-11",
            text: [],
            moveRandom: false,
            graphic: 'tavernier'
        }),
        PnjGlobal({
            name: "Pnj-Glob-12",
            text: [],
            moveRandom: true,
            graphic: 'femme_agee'
        }),
        PnjGlobal({
            name: "Pnj-Glob-13",
            text: [],
            moveRandom: true,
            graphic: 'man3'
        }),
        PnjGlobal({
            name: "Pnj-Glob-14",
            text: [],
            moveRandom: true,
            graphic: 'blackCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-15",
            text: [],
            moveRandom: true,
            graphic: 'oldMan1'
        }),
        // 1er etage
        PnjGlobal({
            name: "Pnj-Glob-16",
            text: [],
            moveRandom: true,
            graphic: 'oldMan2'
        }),
        PnjGlobal({
            name: "Pnj-Glob-17",
            text: [],
            moveRandom: true,
            graphic: 'yellowCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-18",
            text: [],
            moveRandom: true,
            graphic: 'mageF'
        }),
        PnjGlobal({
            name: "Pnj-Glob-19",
            text: [],
            moveRandom: true,
            graphic: 'thiefG'
        }),
        PnjGlobal({
            name: "Pnj-Glob-20",
            text: [],
            moveRandom: true,
            graphic: 'warriorF'
        }),
        PnjGlobal({
            name: "Pnj-Glob-21",
            text: [],
            moveRandom: true,
            graphic: 'blackCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-22",
            text: [],
            moveRandom: true,
            graphic: 'witch'
        }),
        PnjGlobal({
            name: "Pnj-Glob-23",
            text: [],
            moveRandom: true,
            graphic: 'man4'
        }),
        PnjGlobal({
            name: "Pnj-Glob-24",
            text: [],
            moveRandom: true,
            graphic: 'mageG'
        }),
        PnjGlobal({
            name: "Pnj-Glob-25",
            text: [],
            moveRandom: true,
            graphic: 'noble'
        }),
        PnjGlobal({
            name: "Pnj-Glob-26",
            text: [],
            moveRandom: true,
            graphic: 'blackCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-27",
            text: [],
            moveRandom: true,
            graphic: 'priestF'
        }),
        PnjGlobal({
            name: "Pnj-Glob-28",
            text: [],
            moveRandom: true,
            graphic: 'craftman'
        }),
        PnjGlobal({
            name: "Pnj-Glob-29",
            text: [],
            moveRandom: true,
            graphic: 'maitresse_mage'
        }),
        PnjGlobal({
            name: "Pnj-Glob-30",
            text: [],
            moveRandom: true,
            graphic: 'youngLady'
        }),
        PnjGlobal({
            name: "Pnj-Glob-31",
            text: [],
            moveRandom: true,
            graphic: 'whiteCat'
        }),
        PnjGlobal({
            name: "Pnj-Glob-32",
            text: [],
            moveRandom: true,
            graphic: 'thiefG'
        }),
        PnjGlobal({
            name: "Pnj-Glob-33",
            text: [],
            moveRandom: true,
            graphic: 'barde'
        }),
        PnjGlobal({
            name: "Pnj-Glob-34",
            text: [],
            moveRandom: true,
            graphic: 'warriorG'
        }),
    ]

})
export class Grange extends RpgMap { }
