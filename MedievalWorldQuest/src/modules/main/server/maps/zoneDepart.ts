import { RpgMap, MapData } from '@rpgjs/server'
import { Barde_1 } from '../events/barde1ZoneDep'
import { SteleEvent } from '../events/stele'
import { PnjGlobal } from '../events/pnjGlobal'
import { speech } from '../database/dialogue/ZoneDepSpeech'
import { Witch } from '../events/WitchZoneDep'

@MapData({
    id: 'zoneDepart',
    file: require('./tmx/zoneDepart.tmx'),
    name : 'zoneDepart',
    events: [
        Witch,
        Barde_1,
        PnjGlobal({ 
            name: 'Pnj-2',
            text: speech.textPnj2,
            graphic: 'female13',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-3',
            text: speech.textPnj3,
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
