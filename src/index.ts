import app from './app';
import { config } from './config/config';
import { DEBUG } from './core/server/debug/debug';
import { logger } from './shared/middlewares/logger/logger';

async function main() {
  try {
    await DEBUG();
    app.listen(config.server.port);
    logger.setLabel('run');
    logger.debug(`Server on port:  http://localhost:${config.server.port}`);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
  }
}

main();
