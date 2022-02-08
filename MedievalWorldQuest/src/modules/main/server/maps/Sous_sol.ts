import { RpgMap, MapData } from '@rpgjs/server'
import events from '../events/Sous_sol/'

@MapData({
    id: 'Sous_sol',
    file: require('./tmx/Sous_sol.tmx'),    
    //sounds: ['musicSous_sol'],
    events : [
        events.Egouts.Surt,
    ],
})
export class Sous_sol extends RpgMap { }

