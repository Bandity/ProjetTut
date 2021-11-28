import { Sound } from '@rpgjs/client'

@Sound({
    sounds: {
        town: require('./assets/MenestrelTown.ogg'),
    },
    loop: true
})
export class TownMusic {}
