import { RpgSound } from '@rpgjs/client'
import { RpgMap, MapData,RpgPlayer } from '@rpgjs/server'

import { speech } from '../database/dialogue/MenestrelTownSpeech'
import Items from '../database/items'

import events  from '../events/MenestrelTown/index'

import { Monster } from '../events/Monsters'

@MapData({
    id: 'MenestrelTown',
    file: require('./tmx/MenestrelTown.tmx'),
    sounds: ['musicTown'],
    events: [
        events.CombatTest,
        events.Witch,
        events.Craftman,
        events.Barde_1,
        events.Teleporteur({
            name: "egliseTp",
            nameMap: "Eglise", 
        }),
        events.Teleporteur({
            name: "forgeTp",
            nameMap: "Forge", 
        }),
        events.SteleEvent({
            name: 'Stele_1',
        }),

        //////////////////////////////////////////// BOUTIQUES
        events.PnjShop({ 
            name: 'ArmesMagieShop', 
            graphic: 'bucheron',
            items: [Items.Bois, Items.Corde, Items.PotionMana, Items.PotionSoin ],
            text: speech.ArmesMagieShop      
        }),

        events.PnjShop({ 
            name: 'AlchimisteShop', 
            graphic: 'femme_agee',
            items: [Items.Lavande,Items.Truite],
            text: speech.AlchimisteShop       
            }),
        events.PnjShop({ 
            name: 'TavernierShop', 
            graphic: 'tavernier',
            items: [Items.Biere,Items.Vin],
            text: speech.TavernierShop       
            }),
        events.PnjShop({ 
            name: 'MarchandRareShop', 
            graphic: 'bucheron',
            items: [Items.Ambroisie],
            text: speech.MarchandRareShop       
            }),    
        ////////////////////////////////////////////
        //////////////////////////////////////////// QUETES
        events.QuestSimple({ 
            name: 'quest1',
            textStart: speech.textStartQuest1,
            textEnd: speech.textEndQuest1,
            itemRequired: Items.PotionSoin,
            quantity : 1 ,
            graphic: 'noble',
            gain: { gold: 300, exp: 5},
        }),
        events.QuestSimple({ 
            name: 'quest2',
            textStart: speech.textStartQuest2,
            textEnd: speech.textEndQuest2,
            itemRequired: Items.PotionMana,
            quantity : 5,
            graphic: 'man4',
            gain: { gold: 100, exp: 15},
        }),
        events.QuestSimple({ 
            name: 'quest3',
            textStart: speech.textStartQuest3,
            textEnd: speech.textEndQuest3,
            itemRequired: Items.Ambroisie,
            quantity : 3,
            graphic: 'man3',
            gain: { gold: 1500, exp: 20},
        }),
        ////////////////////////////////////////////
        ////////////////////////////////////////////GARDES
        events.Garde({ name: 'garde1', text: speech.GardeEntree}),
        events.Garde({ name: 'garde2', text: speech.GardeEntree}),

        events.Garde({ name: 'garde3', text: speech.GardePalais}),
        events.Garde({ name: 'garde4', text: speech.GardePalais}),

        events.Garde({ name: 'garde5', text: speech.GardeVilleInterne, moove: true}),
        events.Garde({ name: 'garde6', text: speech.GardeVilleInterne, moove: true}),
        events.Garde({ name: 'garde7', text: speech.GardeVilleInterne, moove: true}),
        events.Garde({ name: 'garde8', text: speech.GardeVilleInterne, moove: true}),
        events.Garde({ name: 'garde9', text: speech.GardeVilleInterne, moove: true}),
        events.Garde({ name: 'garde10', text: speech.GardeVilleInterne, moove: true}),
        ////////////////////////////////////////////
        Monster({
            name: 'Slime1',
            graphic: 'slime'
        }),
        //////////////////////////////////////////// PNJ BOURRAGE
        events.PnjGlobal({ 
            name: 'Pnj-2',
            text: speech.textPnj2,
            graphic: 'youngLady',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-3',
            text: speech.textPnj3,
            graphic: 'oldLady',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-4',
            text: speech.textPnj4,
            graphic: 'man1',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-5',
            text: speech.textPnj5,
            graphic: 'man2',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-6',
            text: speech.textPnj6,
            graphic: 'youngLady',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-7',
            text: speech.textPnj7,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-8',
            text: speech.textPnj8,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-9',
            text: speech.textPnj9,
            graphic: 'oldMan2',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-10',
            text: speech.textPnj10,
            graphic: 'oldMan1',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-11',
            text: speech.textPnj11,
            graphic: 'youngLady',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-12',
            text: speech.textPnj12,
            graphic: 'man1',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-13',
            text: speech.textPnj13,
            graphic: 'oldLady',
        }),
        events.PnjGlobal({
            name: 'Pnj-14',
            text: speech.textPnj14,
            graphic: 'youngLady',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Pnj-15',
            text: speech.textPnj15,
            graphic: 'oldMan1',
        }),
        events.PnjGlobal({
            name: 'Pnj-16',
            text: speech.textPnj16,
            graphic: 'man1',
        }),
        events.PnjGlobal({
            name: 'Cat-1',
            text: speech.textChat,
            graphic: 'whiteCat',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Cat-2',
            text: speech.textChatTroll,
            graphic: 'blackCat',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Cat-3',
            text: speech.textChat,
            graphic: 'yellowCat',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Cat-4',
            text: speech.textChat,
            graphic: 'blackCat',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Dog-1',
            text: speech.textChien1,
            graphic: 'whiteDog',
            moveRandom: true
        }),
        events.PnjGlobal({
            name: 'Dog-2',
            text: speech.textChien2,
            graphic: 'blackDog',
            moveRandom: true
        
        }),
        ////////////////////////////////////////////

    ],
})
export class MenestrelTown extends RpgMap { }
