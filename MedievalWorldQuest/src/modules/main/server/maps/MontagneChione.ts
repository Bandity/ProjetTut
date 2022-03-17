import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/MontagneChione/'

@MapData({
    id: 'MontagneChione',
    file: require('./tmx/MontagneChione.tmx'),
    name : 'MontagneChione',       
    events :[ 
        events.MonsterGenerator({
            name: 'Prince_des_glaces',
            gain: { gold: 100, exp: 100 },
            graphic: 'Prince_des_glaces',
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
            mapDepart: "MontagneChione"
        }),
    ],
})
export class MontagneChione extends RpgMap { }
