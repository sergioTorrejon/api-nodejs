import { Router } from 'express';

import adminRoutes from './modules/admin/admin.routes';
import userRoutes from './modules/system/user/user.routes';

const router = Router();

router.use("/admin", adminRoutes);
router.use("/users", userRoutes);


export default router;
