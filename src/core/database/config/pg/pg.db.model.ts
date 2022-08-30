import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

const PG_DB_MODEL = (db)=> {
  return {
  HOST : process.env[db+'_'+'HOST'],
  PORT : process.env[db+'_'+'PORT'] || 5432,
  USERNAME : process.env[db+'_'+'USERNAME'],
  PASSWORD : process.env[db+'_'+'PASSWORD'],
  NAME : process.env[db+'_'+'NAME'],
  }
}

export const conn =  (database:string, ent:any) => {
  const db = PG_DB_MODEL(database)
  return new DataSource({
    type: 'postgres',
    host: db.HOST,
    port: +db.PORT,
    username: db.USERNAME,
    password: db.PASSWORD,
    database: db.NAME,
    synchronize: true,
    //logging: true,
    entities: ent,
  })

}