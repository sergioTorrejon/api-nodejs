import { Router } from 'express';

import adminRoutes from './core/modules/admin/admin.routes';
import userRoutes from './core/modules/admin/schemas/user/user.routes';
import {
  notFoundHandler,
} from './server/middlewares/validators/notfound_handler';

const router = Router();

router.use("/admin", adminRoutes);
router.use("/users", userRoutes);
router.use('*', notFoundHandler)


export default router;
