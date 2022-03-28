import { RpgMap, MapData } from '@rpgjs/server'
import { speech } from '../database/dialogue/CiteOniriqueSpeech'
import classes from '../database/classes/index'
import events from '../events/CiteOnirique/index'

const maitre = events.MaitreClasses
@MapData({
    id: 'citeOnirique',
    file: require('./tmx/CiteOnirique.tmx'),    
    sounds: ['musicCiteOnirique'],
    events : [
        events.Pnj_info,
        maitre,
        events.Teleporteur({
            name: 'Teleporteur',
            nameMap: 'MenestrelTown',
            pnjs : [ maitre ]
        }),
        events.GeneratorClass({
            name: 'mageClass',
            graphic: 'mageF',
            classe: classes.Mage,
            textInit: speech.textInitMage,
            textAccept: speech.textAcceptMage,
            textReject: speech.textRejectMage,
            animations: ["bouleDeFeu","morsureDuFroid","ouragan","coeurDeGlace"],
            tempsAnim: [ 800,1667,800,800]
        }) ,
        events.GeneratorClass({
            name: 'priestClass',
            graphic: 'priestF',
            classe: classes.Priest,
            textInit: speech.textInitPriest,
            textAccept: speech.textAcceptPriest,
            textReject: speech.textRejectPriest,
            animations: ["dark_light","faux_d_ankou","monde_de_tenebre","litanieDivine"],
            tempsAnim: [500,560,400,2000]
        }),
        events.GeneratorClass({
            name: 'thiefClass',
            graphic: 'thiefG',
            classe: classes.Thief,
            textInit: speech.textInitThief,
            textAccept: speech.textAcceptThief,
            textReject: speech.textRejectThief,
            animations: ["incision","hemorragie","roncesNoires","croixSanglante"],
            tempsAnim: [ 1667,1667,1667,1667]
        }),
        events.GeneratorClass({
            name: 'warriorClass',
            graphic: 'warriorG',
            classe: classes.Warrior,
            textInit: speech.textInitWarrior,
            textAccept: speech.textAcceptWarrior,
            textReject: speech.textRejectWarrior,
            animations:["hemorragie","croixSanglante","jugementDivin","pointeFuneste"],
            tempsAnim: [ 1667,1667,1000,2000]
        }),
        //events.Combat

    ],
})
export class CiteOnirique extends RpgMap { }

