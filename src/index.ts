import app from './app';
import { config } from './config/config';
import { DB_SYS_CONFIG } from './config/db/postgres/db-sys.config';
import { logger } from './core/middlewares/logs/logger';

async function main() {
  try {
    await DB_SYS_CONFIG.initialize()
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
