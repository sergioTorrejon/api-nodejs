import { timeStampMoment } from "../../../utils/helpers"
import { file } from "../../../utils/helpers/files/files.helper"
import { format, pathFileName } from "./config/logger.config"

let label = 'logger - undefined'

const setLabel = (_label:string) => {
    label = _label
}

const setLogger = (level:string, msg:string, _data?) => {
    const log =  {
        date : timeStampMoment(),
        level: level,
        label: label,
        msg: msg,
        data:_data
    }

    console.log(format(log))

    file.update(pathFileName(level), JSON.stringify(log))


}


const fatal = (msg:string) => setLogger('fatal',msg)

const error = (msg:string) => setLogger('error',msg)

const warn = (msg:string) => setLogger('warn',msg)

const info = (msg:string) => setLogger('info',msg)

const debug = (msg:string) => setLogger('debug',msg)

const log = (msg:string) => setLogger('log',msg)


export const logger = {
    setLabel,
    fatal,
    error,
    warn,
    info,
    debug,
    log
}
