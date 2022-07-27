import { Router } from 'express';

import configRoutes from './config/config.routes';
import settingRoutes from './settings/settings.routes';

const router = Router();

router.use("/config", configRoutes);
router.use("/setting", settingRoutes);

export default router;
