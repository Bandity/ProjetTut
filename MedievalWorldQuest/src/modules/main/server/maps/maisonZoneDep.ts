import { RpgMap, MapData } from '@rpgjs/server'


@MapData({
    id: 'maisonZoneDep',
    file: require('./tmx/Maison1.tmx'),
    name : 'maisonZoneDep',       
    sounds: ['town']
})
export class MaisonZoneDepMap extends RpgMap { }

