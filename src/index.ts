import app from './app';
import { config } from './config/config';
import { logger } from './server/middlewares/logs/logger';

async function main() {
  try {
    //config.init;
    app.listen(config.server.port);
    console.log("Server on port", config.server.port);
    logger.info('Servidor arriba');
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
    }
  }
}

main();
