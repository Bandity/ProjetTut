import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        heroBlueHair: require('./assets/heroBlueHair.png'),
        moderator: require('./assets/moderator.png'),
        base : require('./assets/base.png'),
        
        barde: require('./assets/barde.png'),
        witch: require('./assets/witch.png'),

        warriorF: require('./assets/warriorF.png'),
        warriorG: require('./assets/warriorG.png'),

        thiefF: require('./assets/thiefF.png'),
        thiefG: require('./assets/thiefG.png'),

        priestF: require('./assets/priestF.png'),
        priestG: require('./assets/priestG.png'),

        mageF: require('./assets/mageF.png'),
        mageG: require('./assets/mageG.png'),

        craftman: require('./assets/craftman.png'),
        noble: require('./assets/noble.png'),

        man1: require('./assets/man1.png'),
        man2: require('./assets/man2.png'),
        oldMan1: require('./assets/oldMan1.png'),
        oldMan2: require('./assets/oldMan2.png'),
        youngLady: require('./assets/youngLady.png'),
        oldLady: require('./assets/oldLady.png'),

        blackCat: require('./assets/blackCat.png'),
        whiteCat: require('./assets/whiteCat.png'),
        yellowCat: require('./assets/yellowCat.png'),
        blackDog: require('./assets/blackDog.png'),
        whiteDog: require('./assets/whiteDog.png'),
        yellowDog: require('./assets/yellowDog.png'),

    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }