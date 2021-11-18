import { RpgMap, MapData } from '@rpgjs/server'

@MapData({
    id: 'zoneDepart',
    file: require('./tmx/zoneDepart.tmx'),
    name : 'ZoneDep'
})
export class ZoneDepartMap extends RpgMap { }
