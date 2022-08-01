import { Config } from './entity/config.entity';

export const _getAll = async () => {
    const data = await Config.find();
    return data
  };



export const _getOne = async (id:number) => {

    const data = await Config.findOneBy({ id: id });
    return data
};