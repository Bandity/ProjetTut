import main from './main'
//import starterKit from '@rpgjs/starter-kit'
import defaultGui from './main/client/gui/guiParDefault/src'
//import  
import mobileGui from '@rpgjs/mobile-gui'
import gamepad from '@rpgjs/gamepad'
import chat from '../assets/chat/index'
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
    save,
    
]