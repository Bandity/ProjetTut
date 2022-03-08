import { RpgMap, MapData } from '@rpgjs/server'
import events from '../events/Sous_sol/'

@MapData({
    id: 'Sous_sol',
    file: require('./tmx/Sous_sol.tmx'),    
    //sounds: ['musicSous_sol'],
    events : [
        // PARTIE EGOUT
        events.Egouts.Surt,

        events.JardinGaia.GardeJardins,
        events.JardinGaia.Maire,
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-1",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-2",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-3",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-4",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-5",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-6",
            graphic: 'witch'
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-7",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-8",
            graphic: 'witch',
        }),
        events.JardinGaia.PnjEntrainement({
            text: ["Pousse toi ou tu vas te prendre un sort !"],
            name: "Pnj-E-9",
            graphic: 'witch',
        }),
    ],
})
export class Sous_sol extends RpgMap { }

