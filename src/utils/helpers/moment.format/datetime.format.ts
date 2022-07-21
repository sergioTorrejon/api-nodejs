import moment = require('moment');

//TODO: REVISAR SI SE PUEDE MEJORAR
const MomentDate= (req, res) => { 
    return  moment(new Date());
}

const TimeStamp = (req, res) => { 
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS') 
};

const fullTimeStamp = () => { 
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS')
}

const timeStamp = () => { 
    return  moment().format('YYYY-MM-DD HH:mm:ss')
}

const dateMoment = () => { 
    return  moment().format('YYYY-MM-DD')
}

const yearMoment = () => { 
    return  moment().format('YYYY')
}

const monthMoment = () => { 
    return  moment().format('MM')
}

const dayMoment = () => { 
    return  moment().format('DD')
}

const timeMoment = () => { 
    return  moment().format('HH:mm:ss')
}

const hourMoment = () => { 
    return  moment().format('HH')
}

const minuteMoment = () => { 
    return  moment().format('mm')
}

const secondMoment = () => { 
    return  moment().format('ss')
}

const firstDayYearMoment = () => { 
    return  moment().format('YYYY-01-01')
}

const lastDayYearMoment = () => { 
    return  moment().format('YYYY-12-31')
}

const firstDayMontMoment = () => { 
    return  moment().format('YYYY-MM-01')
}

const lastDayMontMoment = () => { 
    return  moment(firstDayMontMoment()).subtract(1,'days').format('YYYY-MM-DD')
}

export const momentFormat ={
    MomentDate,
    TimeStamp,
    fullTimeStamp,
    timeStamp,
    dateMoment,
    yearMoment,
    monthMoment,
    dayMoment,
    timeMoment,
    hourMoment,
    minuteMoment,
    secondMoment,
    firstDayYearMoment,
    lastDayYearMoment,
    firstDayMontMoment,
    lastDayMontMoment,
}

