import { RpgMap, MapData } from '@rpgjs/server'


@MapData({
    id: 'citeOnirique',
    file: require('./tmx/CiteOnirique.tmx'),
    name : 'citeOnirique',       
    sounds: ['citeOnirique']
})
export class CiteOnirique extends RpgMap { }

