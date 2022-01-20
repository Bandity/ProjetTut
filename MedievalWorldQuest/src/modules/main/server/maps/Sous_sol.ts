import { RpgMap, MapData } from '@rpgjs/server'
//import { speech } from '../database/dialogue/Sous_solSpeech'
//import events from '../events/Sous_sol/index'

@MapData({
    id: 'Sous_sol',
    file: require('./tmx/Sous_sol.tmx'),    
    //sounds: ['musicSous_sol'],
    events : [

    ],
})
export class Sous_sol extends RpgMap { }

