import * as dotenv from 'dotenv';

import { MomentFormat } from '../../../tools/helpers';
import {
  MOMENT_DATE_FORMAT,
} from '../../../tools/helpers/moment/enum/format.enum';
import { getIPLocal } from '../../../tools/helpers/network/getip';

dotenv.config();

const BUILD_DATE_START = MomentFormat.newdateFormatDefault();
const BUILD_TIME_START = MomentFormat.mewDateFormat(MOMENT_DATE_FORMAT.HHmmss);
const BUILD_IP = getIPLocal()

export const BUILD_CONFIG = {
    date : BUILD_DATE_START,
    timeInit : BUILD_TIME_START,
    ip: BUILD_IP

}