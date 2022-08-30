import * as fs from 'fs';
import path from "path";

export const file:any = {}

file.pathJoin = (pathFolder : string, fileName:string )=>{
    return  path.join(pathFolder, fileName, path.sep)
}

file.exist = (fileName: fs.PathLike)=>{
    try { 
        return fs.existsSync(fileName); 
    } 
    catch (err) { 
        return false; 
    } 
}

file.create = (fileName)  => {
    try { 
        if (!file.exist(fileName)) {
            fs.writeFileSync(fileName,'');; 
        }
        return true
    } 
    catch (err) { 
        return false; 
    } 
}

file.update= async (fileName:string, text: string) =>{
    await file.create(fileName)
    fs.appendFile(fileName, `${text} \n`, function (err) {
      if (err) throw err;
  });
}

file.delete= async (fileName:string) =>{
    try { 
        if (!file.exist(fileName)) {
            fs.unlink(fileName, (err) => {
                if (err) throw err;
                console.log(fileName+' was deleted');
              }); 
        }
        return true
    } 
    catch (err) { 
        return false; 
    } 
}