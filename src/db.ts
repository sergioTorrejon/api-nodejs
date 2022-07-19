import { DataSource } from 'typeorm';

import { ENV_CONFIG } from './config/env';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV_CONFIG.DATABASE_HOST,
  port: +ENV_CONFIG.DATABASE_PORT,
  username: ENV_CONFIG.DATABASE_USERNAME,
  password: ENV_CONFIG.DATABASE_PASSWORD,
  database: ENV_CONFIG.DATABASE_NAME,
  synchronize: true,
  //logging: true,
  entities: [User],
});
