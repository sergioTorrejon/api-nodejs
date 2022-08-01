import { Router } from 'express';

import configRoutes from './schemas/config/config.routes';
import settingRoutes from './schemas/settings/settings.routes';

const router = Router();

router.use("/config", configRoutes);
router.use("/setting", settingRoutes);

export default router;
