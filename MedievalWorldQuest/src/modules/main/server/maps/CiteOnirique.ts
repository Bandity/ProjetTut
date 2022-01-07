import { RpgMap, MapData } from '@rpgjs/server'
import { speech } from '../database/dialogue/CiteOniriqueSpeech'
import classes from '../database/classes/index'
import events from '../events/CiteOnirique/index'

@MapData({

    id: 'citeOnirique',
    file: require('./tmx/CiteOnirique.tmx'),
    name : 'citeOnirique',       
    sounds: ['citeOnirique'],
    events : [
        events.Pnj_info,
        events.MaitreClasses,
        events.Teleporteur({
            name: 'Teleporteur',
            nameMap: "MenestrelTown",
        }),
        events.GeneratorClass({
            name: 'mageClass',
            graphic: 'mageF',
            classe: classes.Mage,
            textInit: speech.textInitMage,
            textAccept: speech.textAcceptMage,
            textReject: speech.textRejectMage
        }) ,
        events.GeneratorClass({
            name: 'priestClass',
            graphic: 'priestF',
            classe: classes.Priest,
            textInit: speech.textInitPriest,
            textAccept: speech.textAcceptPriest,
            textReject: speech.textRejectPriest
        }),
        events.GeneratorClass({
            name: 'thiefClass',
            graphic: 'thiefG',
            classe: classes.Thief,
            textInit: speech.textInitThief,
            textAccept: speech.textAcceptThief,
            textReject: speech.textRejectThief
        }),
        events.GeneratorClass({
            name: 'warriorClass',
            graphic: 'warriorG',
            classe: classes.Warrior,
            textInit: speech.textInitWarrior,
            textAccept: speech.textAcceptWarrior,
            textReject: speech.textRejectWarrior
        }),
        events.Combat

    ],
})
export class CiteOnirique extends RpgMap { }

