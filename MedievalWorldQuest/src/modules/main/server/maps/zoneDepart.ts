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
            graphic: 'youngLady',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-3',
            text: speech.textPnj3,
            graphic: 'oldLady',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-4',
            text: speech.textPnj4,
            graphic: 'man1',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-5',
            text: speech.textPnj5,
            graphic: 'man2',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-6',
            text: speech.textPnj6,
            graphic: 'youngLady',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-7',
            text: speech.textPnj7,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-8',
            text: speech.textPnj8,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-9',
            text: speech.textPnj9,
            graphic: 'oldMan2',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-10',
            text: speech.textPnj10,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-11',
            text: speech.textPnj11,
            graphic: 'youngLady',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Pnj-12',
            text: speech.textPnj12,
            graphic: 'man1',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Cat-1',
            text: speech.textChat,
            graphic: 'whiteCat',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Cat-2',
            text: speech.textChatTroll,
            graphic: 'blackCat',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Cat-3',
            text: speech.textChat,
            graphic: 'yellowCat',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Cat-4',
            text: speech.textChat,
            graphic: 'blackCat',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Dog-1',
            text: speech.textChien1,
            graphic: 'whiteDog',
            moveRandom: true
        }),
        PnjGlobal({
            name: 'Dog-2',
            text: speech.textChien2,
            graphic: 'blackDog',
            moveRandom: true
        
    }),
        SteleEvent({
            name: 'Stele_1',
        }),
    ],
    sounds: ['town']
})
export class ZoneDepartMap extends RpgMap { }
