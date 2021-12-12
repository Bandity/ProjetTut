import main from './main'
//import starterKit from '@rpgjs/starter-kit'
import defaultGui from '@rpgjs/default-gui' 
import mobileGui from '@rpgjs/mobile-gui'
import gamepad from '@rpgjs/gamepad'
import chat from '../assets/chat/index'
import {Combats} from './main/server/events/Combats';
import titleScreen from '@rpgjs/title-screen'
import save from '@rpgjs/save' // optional

export default [
    //titleScreen, 
    main,
    //starterKit,
    defaultGui,
    mobileGui,
    gamepad, 
    chat,
    Combats,
    //titleScreen,
    save
    
]