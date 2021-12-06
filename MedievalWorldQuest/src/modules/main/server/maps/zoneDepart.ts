import { RpgMap, MapData } from '@rpgjs/server'
import { Barde_1 } from '../events/barde1ZoneDep'
import { SteleEvent } from '../events/stele'
import { PnjGlobal } from '../events/pnjGlobal'
import { speech } from '../database/dialogue/ZoneDepSpeech'
import { Witch } from '../events/WitchZoneDep'
import { Craftman } from '../events/CraftmanZoneDep'
import { Noble_1 } from '../events/Noble_1'
import { Skin } from '../events/Skins'
import { Monster } from '../events/Monsters'

@MapData({
    id: 'zoneDepart',
    file: require('./tmx/zoneDepart.tmx'),
    name : 'zoneDepart',
    events: [
        Witch,
        Craftman,
        Barde_1,
        Noble_1,
        Monster({
            name: 'Slime1',
            graphic: 'slime'
        }),
        Skin({
            name: 'Skin1',
            graphic: 'warrior'
        }),
        Skin({
            name: 'Skin2',
            graphic: 'thief'
        }),
        Skin({
            name: 'Skin3',
            graphic: 'priest'
        }),
        Skin({
            name: 'Skin4',
            graphic: 'mage'
        }),
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
