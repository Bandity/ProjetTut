import { RpgMap, MapData } from '@rpgjs/server'
import { speech } from '../database/dialogue/CiteOniriqueSpeech'
import events from '../events/CiteOnirique/index'

@MapData({
    id: 'Eglise_carte',
    file: require('./tmx/Eglise_carte.tmx'),
    name : 'Eglise',       
})
export class Eglise_carte extends RpgMap { }

