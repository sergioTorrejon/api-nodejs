import { Router } from 'express';

import v1Routes from './routes/v1/v1.routes';
import {
  notFoundHandler,
} from './shared/middlewares/validators/notfound_handler';

const router = Router();

router.use("/v1", v1Routes);
router.use('*', notFoundHandler)


export default router;
