import { conn } from "../../core/database/config/pg/pg.db.model"
import { MODEL_ADMIN } from "../../core/modules/admin/admin.model"
import { User } from "../../core/modules/admin/schemas/user/entity/user"
import { logger } from "../../shared/middlewares/logger/logger"

export const DATABASE_CONFIG ={
ADMIN : conn(MODEL_ADMIN.preFixDB,MODEL_ADMIN.entities),
CORE : conn('DATABASE_CORE',[]),
SYS : conn('DATABASE_SYS', [User])
}

export const DB_INITIALIZE = async () =>{
    logger.setLabel('INICIANDO BASE DE DATOS ADMIN')
    await DATABASE_CONFIG.ADMIN.initialize();
    logger.debug('db_admin OK')
    logger.setLabel('INICIANDO BASE DE DATOS CORE')
    await DATABASE_CONFIG.CORE.initialize()
    logger.debug('db_core OK')
    logger.setLabel('INICIANDO BASE DE DATOS SYS')
    await DATABASE_CONFIG.SYS.initialize()
    logger.debug('db_sys OK')
}