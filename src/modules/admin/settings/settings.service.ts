import { DB_CORE_CONFIG } from '../../../config/db/postgres/db-core.config';
import { DB_SYS_CONFIG } from '../../../config/db/postgres/db-sys.config';

const type = 'Setting'
const typep = 'User'


export const _getAll = async () => {
  const data = await DB_SYS_CONFIG.getRepository(typep).find()
  return data
  };


export const _getOne = async (id:number) => {
  const results = await DB_SYS_CONFIG.getRepository(type).findOneBy({
    id: id,
  })
  return results
};

export const _postOne = async (dto) => {

  const newuser = DB_CORE_CONFIG.getRepository(type).create(dto)
  const results = await DB_CORE_CONFIG.getRepository(type).save(newuser)
  return results
};

export const _putOne = async (id:number,dto) => {
  const data = await DB_SYS_CONFIG.getRepository(type).findOneBy({
    id: id,
  })
  if(data){
    DB_SYS_CONFIG.getRepository(type).merge(data, dto);
    const results = await DB_SYS_CONFIG.getRepository(type).save(data)
    return results
  }
  return {message:'error'}
};