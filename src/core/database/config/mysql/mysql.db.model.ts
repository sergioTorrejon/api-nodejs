import * as dotenv from 'dotenv';
dotenv.config();

export const MYSQL_DB_MODEL = (db)=> {
  return {
  HOST : process.env[db+'_'+'HOST'],
  PORT : process.env[db+'_'+'PORT'] || 1322,
  USERNAME : process.env[db+'_'+'USERNAME'],
  PASSWORD : process.env[db+'_'+'PASSWORD'],
  NAME : process.env[db+'_'+'NAME'],
  }
}