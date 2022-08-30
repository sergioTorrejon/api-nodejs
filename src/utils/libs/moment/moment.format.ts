import moment from 'moment';

import { MOMENT_DATE_FORMAT } from './enum/format.enum';

export const timeStampMoment = () => { 
    let newDate =  moment(new Date())
    return  moment(newDate).format(MOMENT_DATE_FORMAT.FULLTIMESTAMP)
}

const mewDateFormat = (formatRet:string) => { 
    return  moment().format(formatRet)
}

const newdateFormatDefault = () => { 
    return  moment().format(MOMENT_DATE_FORMAT.DDMMYYYY)
}

const timeStampFormatDefault = (date:string) => { 
    let newDate = moment(date, MOMENT_DATE_FORMAT.DDMMYYYY)
    return  moment(newDate).format(MOMENT_DATE_FORMAT.DDMMYYYY)
}

const timeStampFormatFull = (date:string,formatRet:string) => { 
    let newDate =  moment(new Date(date))
    return  moment(newDate).format(formatRet)
}

const timeStampFormat = (date:string,formatOrg:string,formatRet:string) => { 
    let newDate = moment(date, formatOrg)
    return  moment(newDate).format(formatRet)
}

const firstDayYearMoment = (year:string,formatRet:string) => { 
    let newDate = moment(year, 'YYYY').format('YYYY-01-01')
    return  moment(newDate).format(formatRet)
}

const lastDayYearMoment = (year:string,formatRet:string) => { 
    let newDate = moment(year, 'YYYY').format('YYYY-12-31')
    return  moment(newDate).format(formatRet)
}

const firstDayMonthMoment = (year:string,month:string,formatRet:string) => { 
    let firstYear = moment(year+'-'+month, 'YYYY-MM').format('YYYY-MM-01')
    return  moment(firstYear).format(formatRet)
}

const lastDayMonthMoment = (year:string,month:string,formatRet:string) => { 
    let nexmonth = ((moment(year+'-'+month, 'YYYY-MM')).add(1,'month')).subtract(1,'days')
    return  moment(nexmonth).format(formatRet)
}

export const MomentFormat = {
    mewDateFormat,
    newdateFormatDefault,
    timeStampFormatDefault,
    timeStampFormatFull,
    timeStampFormat,
    firstDayYearMoment,
    lastDayYearMoment,
    firstDayMonthMoment,
    lastDayMonthMoment
}


