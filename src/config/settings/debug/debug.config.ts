import * as dotenv from 'dotenv';

import { MomentFormat } from '../../../tools/helpers';
import {
  MOMENT_DATE_FORMAT,
} from '../../../tools/helpers/moment/enum/format.enum';
import { getIPLocal } from '../../../tools/helpers/network/getip';

dotenv.config();

const DEBUG_DATE_START = MomentFormat.newdateFormatDefault();
const DEBUG_TIME_START = MomentFormat.mewDateFormat(MOMENT_DATE_FORMAT.HHmmss);
const DEBUG_IP = getIPLocal()

export const DEBUG_CONFIG = {
    date : DEBUG_DATE_START,
    timeInit : DEBUG_TIME_START,
    ip: DEBUG_IP

}