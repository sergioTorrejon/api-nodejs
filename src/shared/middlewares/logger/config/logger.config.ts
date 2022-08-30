import { PATH_STORAGE } from "../../../../config/server/server.config"
import { file } from "../../../../utils/helpers/files/files.helper"
import { folder } from "../../../../utils/helpers/folders/folders.helper"
import { setColors, setPrintColor } from "../../../../utils/helpers/terminal/colors.helper"

const pathStorage = folder.pathJoin(PATH_STORAGE,'storage')

const levels={
    fatal:'fatal',
    error:'error',
    warn:'warn',
    debug:'debug',
    info:'info',
    log:'log',
}
const levelsConfig=[
    {name:levels.fatal, color:setColors.backRed },
    {name:levels.error, color:setColors.red},
    {name:levels.warn, color:setColors.yellow},
    {name:levels.debug, color:setColors.purple},
    {name:levels.info, color:setColors.green},
    {name:levels.log, color:setColors.blue},
]

export const pathFileName = (_level)=>{
    const pathFolder = folder.pathJoin(pathStorage,_level)
    folder.create(pathFolder)
    return file.pathJoin(pathFolder, _level+'.log')
}


const print:any = {}

print.date = (date) => {
    return setPrintColor(`[${date}]`,setColors.gray)
}

print.level = (_level) => {
    const level = levelsConfig.find((config)=>(config.name === _level))
    if(!level) throw new Error('No existe el nivel')
    return setPrintColor(`[${level.name}]`,level.color)
}

print.label = (label) => {
    return setPrintColor(`[${label}]`,setColors.magenta)
}

export const format = (_log) => {
    return `${print.date(_log.date)} ${print.level(_log.level)}: -- ${print.label(_log.label)} -- ${_log.msg} `
}
