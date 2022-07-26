import * as dotenv from 'dotenv';

import { MomentFormat } from '../../../tools/helpers';

dotenv.config();

const APP_NAME = 'SYSTEM CORE';
const APP_SHORT_NAME = 'SYSCORE';
const APP_DESCRIPTION= 'Sistema para la configuracion de los demas sistemas';
const APP_NAME_COMPANY= 'Code Core System';
const APP_NAME_SHORT_COMPANY= 'CodeCore';
const APP_DATE_START= MomentFormat.timeStampFormatDefault('01-01-2021');
const APP_DATE_EXPIRED= MomentFormat.timeStampFormatDefault('01-01-2023');
const APP_OWNER= 'Sergio Torrejon';

export const APP_CONFIG = {
    appName: APP_NAME,
    appShortName: APP_SHORT_NAME,
    appDescription: APP_DESCRIPTION,
    appNameCompany: APP_NAME_COMPANY,
    appNameShortCompany: APP_NAME_SHORT_COMPANY,
    appDateStart: APP_DATE_START,
    appDateExpired: APP_DATE_EXPIRED,
    appOwner:APP_OWNER

}
