import { Router } from 'express';

import settingRoutes from './schemas/settings/settings.routes';

const router = Router();

router.use("/setting", settingRoutes);

export default router;
