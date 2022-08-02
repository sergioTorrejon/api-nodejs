import { stringff } from '../../../../../../server/pipes/string.pipe';
import { settingsModel } from '../model/setting.model';

const valfirstname = stringff(settingsModel.firstname)
const vallastname = stringff(settingsModel.lastname)

export const validSettingsCreate = [
    ...valfirstname,
    ...vallastname
]

