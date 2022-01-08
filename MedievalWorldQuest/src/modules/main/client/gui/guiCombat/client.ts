import { RpgModule, RpgClient } from '@rpgjs/client'
import { GuiSounds } from '../guiParDefault/assets/sounds';

@RpgModule<RpgClient>({
    gui: [
        CombatUi
    ],
    sounds: [
        GuiSounds
    ]
})
export default class RpgClientEngine {}