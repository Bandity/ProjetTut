import { Sound } from '@rpgjs/client'

@Sound({
    id: 'musicTown',
    sounds: {
        town: require('./assets/MenestrelTown.ogg'),
    },
    loop: true
})
export class TownMusic {}