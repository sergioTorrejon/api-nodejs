import { DB_ADMIN } from './db';
import { DEBUG_CONFIG } from './settings/debug/debug.config';
import { SERVER_CONFIG } from './settings/server/server.config';

export const dbAdminInit = async () => await DB_ADMIN.initialize()
export const dbCoreInit  = async () => await DB_ADMIN.initialize()
export const dbSysInit  = async () => await DB_ADMIN.initialize()


export const DB_INITIALIZE = () =>{
    dbAdminInit(),
    dbCoreInit(), 
    dbSysInit()
}

export const config = {
    server:SERVER_CONFIG,
    debug:DEBUG_CONFIG,
    init: DB_INITIALIZE(),
}