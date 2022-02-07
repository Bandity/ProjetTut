import { RpgPlayer, RpgPlayerHooks, RpgMap, RpgWorld } from '@rpgjs/server'

function sendMessage(obj: { message: string, map: RpgMap, player?: RpgPlayer, type?: string }) {
    const { message, map, player, type } = obj
    const data: any = {
        message,
        date: Date.now(),
        type: type || 'player'
    }
    if (player) {
        data.sender = player.id
    }
    RpgWorld.getPlayersOfMap(map.id).forEach(p => {
        p.emit('chat-message', data)
    })
}


export const player: RpgPlayerHooks = {
    
    onJoinMap(player: RpgPlayer, map: RpgMap) {
        
        sendMessage({
            message: `${player.name} a entrée dans la map`, 
            map, 
            player,
            type: 'info'
        })
        player.on('chat-message', (message) => {
            console.log(message)
            console.log(player)
            sendMessage({
                message: `${player.name}: ${message}`, 
                map, 
                player
            })
        })
    },
    onLeaveMap(player: RpgPlayer, map: RpgMap) {
        
        sendMessage({
            
            message: `${player.name} a sortie de la map`, 
            map, 
            player,
            type: 'info'
        })
    }
}