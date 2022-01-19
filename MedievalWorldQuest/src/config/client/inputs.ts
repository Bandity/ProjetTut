import { Input, Control } from '@rpgjs/client'

export const inputs = {
    [Control.Up]: {
        repeat: true,
        bind: [Input.Up, Input.Z, Input.W]
    },
    [Control.Down]: {
        repeat: true,
        bind: [Input.Down, Input.S]
    },
    [Control.Right]: {
        repeat: true,
        bind: [Input.Right, Input.D]
    },
    [Control.Left]: {
        repeat: true,
        bind: [Input.Left, Input.A, Input.Q]
    },
    [Control.Action]: {
        bind: [Input.Space, Input.Enter]
    },
    [Control.Back]: {
        bind: [Input.Escape]

    },

    Spell1 :{
        bind: [Input.One]
    },
    Spell2 :{
        bind: [Input.Two]
    },
    Speed:{
        bind: [Input.Shift]
    }
} 