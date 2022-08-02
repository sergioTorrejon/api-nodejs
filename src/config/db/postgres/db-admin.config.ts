import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import {
  Setting,
} from '../../../core/modules/admin/schemas/settings/entity/settings';

dotenv.config();

const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
const DATABASE_PORT = process.env.DATABASE_PORT || 5432;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'admin';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'postgres';
const DATABASE_NAME = 'db_admin';

export const DB_ADMIN = new DataSource({
    type: 'postgres',
    host: DATABASE_HOST,
    port: +DATABASE_PORT,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    synchronize: true,
    //logging: true,
    entities: [Setting],
  });