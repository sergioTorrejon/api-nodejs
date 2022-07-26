import { APP_CONFIG } from './settings/app/app.config';
import { BUILD_CONFIG } from './settings/build/build.config';
import { SERVER_CONFIG } from './settings/server/server.config';

export const config = {
    server:SERVER_CONFIG,
    app: APP_CONFIG,
    debug:BUILD_CONFIG,
}