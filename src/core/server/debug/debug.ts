import { DB_INITIALIZE } from "../../../config/database/database.config"


export const DEBUG = async () =>{
    await DB_INITIALIZE()

}