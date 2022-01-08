import { Sound } from '@rpgjs/client'

@Sound({
    id: 'musicTown',
    sound: require('./assets/MenestrelTown.ogg'),
    loop: true
})
export class TownMusic {}