import { Sound } from '@rpgjs/client'

@Sound({
    id: 'musicCiteOnirique',
    sounds: {
        citeOnirique: require('./assets/CiteOnirique.ogg'),
    },
    loop: true
})
export class CiteOniriqueMusic {}