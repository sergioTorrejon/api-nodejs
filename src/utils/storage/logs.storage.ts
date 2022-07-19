import * as dotenv from 'dotenv';

import { joinPathFolder } from '../helpers/path/join,path';

dotenv.config();

const pathStorageLogs = ( file : string ='' ) => {
    
    if(file === ''){
        const archivo= joinPathFolder(joinPathFolder(process.cwd() ,'storage') ,'common');
        return archivo;
    }
    else{
        const archivo= joinPathFolder(joinPathFolder(process.cwd() ,'storage') ,'logs');
        return archivo
    }
}

export default pathStorageLogs