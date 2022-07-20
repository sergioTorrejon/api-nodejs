import app from './app';
import { APP_CONFIG as config } from './config/config';
import { AppDataSource } from './config/db';
import { logger } from './core/logger/logger';

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(config.port);
    console.log("Server on port", config.port);
    logger.info('Servidor arriba');
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
    }
  }
}

main();
