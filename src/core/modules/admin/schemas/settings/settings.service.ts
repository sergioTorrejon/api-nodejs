import { DATABASE_CONFIG } from '../../../../../config/database/database.config';
import { crudService } from '../../../../../shared/services/crud.service';

const type = 'Setting'
const repository = DATABASE_CONFIG.ADMIN.getRepository(type)

const _getAll = async () => {
  return await crudService.getAll(repository);
};

const _getOne = async (params) => {
  const { id } = params;
  return await crudService.getOne(repository,+id);
};

const _postOne = async (body) => {
  return await crudService.postOne(repository,body);
};

const _putOne = async (params,body) => {
  const { id } = params;
  return await crudService.putOne(repository,+id,body);
};

const _deleteOne = async (params) => {
  const { id } = params;
  return await crudService.deleteOne(repository,+id);
};

export const settingService = {
  _getAll,
  _getOne,
  _postOne,
  _putOne,
  _deleteOne
};