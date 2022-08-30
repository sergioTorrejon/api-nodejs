import * as fs from 'fs';
import path from "path";

export let folder:any = {}

folder.pathJoin = (pathFolder : string, folderName:string )=>{
    return  path.join(pathFolder, folderName, path.sep)
}

folder.exist = (pathFolder: fs.PathLike)=>{
    try { 
        return fs.existsSync(pathFolder); 
    } 
    catch (err) { 
        return false; 
    } 
}

folder.create = (pathFolder: fs.PathLike)  => {
    try { 
        if (!folder.exist(pathFolder)) {
            fs.mkdirSync(pathFolder, { recursive: true }); 
        }
        return true
    } 
    catch (err) { 
        return false; 
    } 
}