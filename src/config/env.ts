import * as dotenv from 'dotenv';
import { DatabaseType } from 'typeorm';

dotenv.config();

export const ENV_CONFIG = {
    //CONFIGURACION SEVIDOR
    SERVER_PORT : process.env.SERVER_PORT || 3000,

    DATABASE_TYPE : process.env.DATABASE_TYPE || 'postgres' as DatabaseType,
    DATABASE_HOST : process.env.DATABASE_HOST || 'localhost',
    DATABASE_PORT : process.env.DATABASE_PORT || 5432,
    DATABASE_USERNAME : process.env.DATABASE_USERNAME || 'admin',
    DATABASE_PASSWORD : process.env.DATABASE_PASSWORD || 'postgres',
    DATABASE_NAME : process.env.DATABASE_NAME || 'db_sys',

}
