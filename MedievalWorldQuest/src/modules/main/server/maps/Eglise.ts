import { RpgMap, MapData } from '@rpgjs/server'

@MapData({
    id: 'Eglise',
    file: require('./tmx/Eglise.tmx'),
    name : 'Eglise',       
})
export class Eglise extends RpgMap { }

