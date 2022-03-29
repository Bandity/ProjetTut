import { RpgMap, MapData } from '@rpgjs/server'
import { speech } from '../database/dialogue/CiteOniriqueSpeech'
import classes from '../database/classes/index'
import events from '../events/CiteOnirique/index'
import MageSkills from '../database/skills/Mage'
import PriestSkills from '../database/skills/Priest'
import ThiefSkills from '../database/skills/Thief'
import WarriorSkills from '../database/skills/Warrior'
const maitre = events.MaitreClasses
@MapData({
    id: 'citeOnirique',
    file: require('./tmx/CiteOnirique.tmx'),    
    sounds: ['musicCiteOnirique'],
    events : [
        events.MonsterGenerator({
            name: 'MonstreEntrainement',
            gain: { gold: 0, exp: 0 },
            graphic: 'Prince_des_glaces',
            health: {
                start: 1,
                end: 1
            },
            spells: {
                start: 534,
                end: 550
            },
            str: {
                start: 31,
                end: 1000
            },
            int: {
                start: 26,
                end: 1000
            },
            dex: {
                start: 24,
                end: 564
            },
            agi: {
                start: 28,
                end: 582
            },
            playerSpRegener: {
                start: 0,
                end: 10
            },
            mapCombat: "Prince_des_Glaces_MontagneChione",
            mapDepart: "citeOnirique",
            boss: false,
            randomMove : false
        }),
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
            tempsAnim: [ 800,1667,800,800],
            listSkill : [MageSkills.BouleDeFeu,MageSkills.MorsureDuFroid,MageSkills.Ouragan,MageSkills.CoeurDeGlace],
        }) ,
        events.GeneratorClass({
            name: 'priestClass',
            graphic: 'priestF',
            classe: classes.Priest,
            textInit: speech.textInitPriest,
            textAccept: speech.textAcceptPriest,
            textReject: speech.textRejectPriest,
            animations: ["dark_light","faux_d_ankou","monde_de_tenebre","litanieDivine"], 
            tempsAnim: [500,560,400,2000],
            listSkill : [PriestSkills.LumiereDeLAurore,PriestSkills.FauxDAnkou,PriestSkills.MondeDeTenebre,PriestSkills.LitanieDivine],
        }),
        events.GeneratorClass({
            name: 'thiefClass',
            graphic: 'thiefG',
            classe: classes.Thief,
            textInit: speech.textInitThief,
            textAccept: speech.textAcceptThief,
            textReject: speech.textRejectThief,
            animations: ["incision","hemorragie","roncesNoires","croixSanglante"],
            tempsAnim: [ 1667,1667,1667,1667],
            listSkill : [ThiefSkills.Incision,ThiefSkills.Hemorragie,ThiefSkills.RoncesNoires,ThiefSkills.Hecatombe],
        }),
        events.GeneratorClass({
            name: 'warriorClass',
            graphic: 'warriorG',
            classe: classes.Warrior,
            textInit: speech.textInitWarrior,
            textAccept: speech.textAcceptWarrior,
            textReject: speech.textRejectWarrior,
            animations:["hemorragie","croixSanglante","jugementDivin","pointeFuneste"],
            tempsAnim: [ 1667,1667,1000,2000],
            listSkill : [WarriorSkills.HirondelleNoire,WarriorSkills.CroixSanglante,WarriorSkills.JugementDivin,WarriorSkills.PointeFuneste],
        }),
        //events.Combat

    ],
})
export class CiteOnirique extends RpgMap { }

