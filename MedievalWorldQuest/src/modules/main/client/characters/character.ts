import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        heroBlueHair: require('./assets/heroBlueHair.png'),
        female13: require('./assets/Female 13-2.png'),
        female19: require('./assets/Female 19-3.png'),
        male1_1: require('./assets/Male 01-1.png'),
        barde: require('./assets/barde.png'),
        male12: require('./assets/Male 12-2.png'),
        male17: require('./assets/Male 17-2.png'),
        male1_2: require('./assets/Male 01-2.png'),
        witch: require('./assets/witch.png'),
        warrior: require('./assets/warrior.png'),
        thief: require('./assets/thief.png'),
        prest: require('./assets/prest.png'),
        mage: require('./assets/mage.png'),

    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }