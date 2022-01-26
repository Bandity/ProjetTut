import client from 'client!./client'
import server from 'server!./server'
import databaseList  from './server/database/items'

export const database = databaseList

export default {
    client,
    server
}