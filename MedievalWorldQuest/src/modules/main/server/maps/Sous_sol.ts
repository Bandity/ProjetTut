import { RpgMap, MapData } from '@rpgjs/server'
import events from '../events/Sous_sol/'

@MapData({
    id: 'Sous_sol',
    file: require('./tmx/Sous_sol.tmx'),
    //sounds: ['musicSous_sol'],
    events: [
        // PARTIE EGOUT
        events.Egouts.Surt,
        events.MonsterGenerator({
            name: 'Tavana',
            gain: { gold: 100, exp: 100 },
            graphic: 'tavana',
            health: {
                start: 440,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "TavanaEgout",
            mapDepart: "Sous_sol"
        }),

        //Slimes 
        events.MonsterGenerator({
            name: 'SlimeEg1',
            gain: { gold: 20, exp: 20 },
            graphic: 'surt',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg2',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg3',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg4',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg5',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg6',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg7',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg8',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg9',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),

        events.MonsterGenerator({
            name: 'SlimeEg10',
            gain: { gold: 20, exp: 20 },
            graphic: 'slime',
            health: {
                start: 70,
                end: 600
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "SlimeEgout",
            mapDepart: "Sous_sol"
        }),
        
        //Jardins
        events.JardinGaia.GardeJardins,
        events.JardinGaia.Maire,
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-1",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-2",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-3",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-4",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-5",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-6",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-7",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-8",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-9",
            graphic: 'witch',
        }),
    ],
})
export class Sous_sol extends RpgMap { }

