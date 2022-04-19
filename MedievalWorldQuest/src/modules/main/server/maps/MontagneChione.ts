import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/MontagneChione/'

@MapData({
    id: 'MontagneChione',
    file: require('./tmx/MontagneChione.tmx'),
    name : 'MontagneChione',       
    events :[ 
        events.Andre,
        events.Cinematique,
        events.Teleporteur({
            name: 'tpJardins',
            nameMap: 'Sous_sol',
            teleportX : 3245,
            teleportY :3855,
        }),
        events.TeleporteurBoss,
        events.MonsterGenerator({
            name: 'Prince_des_glaces',
            gain: { gold: 100, exp: 100 },
            graphic: 'Prince_des_glaces',
            health: {
                start: 1,
                end: 1
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
            mapCombat: "Prince_des_Glaces_MontagneChione",
            mapDepart: "MontagneChione",
            boss: true
        }),

        //Squelettes
        events.MonsterGenerator({
            name: 'SqueletteMont1',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont2',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont3',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont4',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont5',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont6',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont7',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteMont8',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteAvecEpee',
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
            mapCombat: "SqueletteMontagne",
            mapDepart: "MontagneChione"
        }),

        //Squelettes sombres
        events.MonsterGenerator({
            name: 'SqueletteSMont1',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteSombre',
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
            mapCombat: "SqueletteSombreMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteSMont2',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteSombre',
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
            mapCombat: "SqueletteSombreMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteSMont3',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteSombre',
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
            mapCombat: "SqueletteSombreMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteSMont4',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteSombre',
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
            mapCombat: "SqueletteSombreMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'SqueletteSMont5',
            gain: { gold: 20, exp: 20 },
            graphic: 'squeletteSombre',
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
            mapCombat: "SqueletteSombreMontagne",
            mapDepart: "MontagneChione"
        }),

        //Fantomes
        events.MonsterGenerator({
            name: 'FantomeMont1',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont2',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont3',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont4',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont5',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont6',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont7',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeMont8',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantome',
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
            mapCombat: "FantomeMontagne",
            mapDepart: "MontagneChione"
        }),

        //Fantomes de glace
        events.MonsterGenerator({
            name: 'FantomeGMont1',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont2',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont3',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont4',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont5',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont6',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont7',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont8',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont9',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont10',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont11',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont12',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont13',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont14',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont15',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont16',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont17',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),

        events.MonsterGenerator({
            name: 'FantomeGMont18',
            gain: { gold: 20, exp: 20 },
            graphic: 'fantomeDeGlace',
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
            mapCombat: "FantomeGlaceMontagne",
            mapDepart: "MontagneChione"
        }),
    ],
})
export class MontagneChione extends RpgMap { }
