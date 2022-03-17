import { RpgMap, MapData } from '@rpgjs/server'
import events  from '../events/MontagneChione/'

@MapData({
    id: 'MontagneChione',
    file: require('./tmx/MontagneChione.tmx'),
    name : 'MontagneChione',       
    events :[ 

        //events.RedLine,

    ],
})
export class MontagneChione extends RpgMap { }
