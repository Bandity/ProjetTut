import { RpgMap, MapData } from '@rpgjs/server'
import { Barde_1 } from '../events/barde1ZoneDep'
import { SteleEvent } from '../events/stele'
@MapData({
    id: 'zoneDepart',
    file: require('./tmx/zoneDepart.tmx'),
    name : 'zoneDepart',
    events: [
        Barde_1,
        SteleEvent({
            name: 'Stele_1',
        }),
    ],
    sounds: ['town']
})
export class ZoneDepartMap extends RpgMap { }
