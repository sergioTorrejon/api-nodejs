const getAll = async (model) => {
    const data = await model.find({ where:{
        active:true
        }
    })
    return data
};
  
const getOne = async (model,id:number) => {
    const data = await model.findOneBy({
        id: id,
        active:true
    })
    if(!data){
        throw new Error("No existe el registro");
    }
    return data
};
  
const postOne = async (model,dto) => {
    const _new = model.create(dto)
    const data = await model.save(_new)
    return data
};

const putOne = async (model,id:number,dto) => {
    const data = await model.findOneBy({
        id: id,
        active:true
    })
    if(!data){
        throw new Error("No se encontro el registro");
    }
    model.merge(data,dto)
    const result = await model.save(data)
    return result
};

const deleteOne = async (model,id:number) => {
    const data = await model.findOneBy({
        id: id,
        active:true
    })
    if(!data || data == null){
        throw new Error("No se encontro el registro");
    }
    data.active = false;
    const result = await model.save(data)
    return result
};

const ereaseOne = async (model,id:number) => {
    const data = await model.findOneBy({
        id: id,
    })
    if(!data){
        throw new Error("No se encontro el registro");
    }
    const result = await model.delete(id)
    return result
};
  
 
export const crudService = {
    getAll,
    getOne,
    postOne,
    putOne,
    deleteOne,
    ereaseOne
  }