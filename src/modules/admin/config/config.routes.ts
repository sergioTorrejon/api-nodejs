import { Router } from 'express';

import { getConfigs } from './config.controller';

const router = Router();

router.get("/", getConfigs);

export default router;
