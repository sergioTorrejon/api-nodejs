import * as dotenv from 'dotenv';

import { ENV_CONFIG } from './config/env';

dotenv.config();

export const APP_CONFIG = {
    port:ENV_CONFIG.SERVER_PORT,

}
