import { Router } from 'express';

import {
  validateCreate,
} from '../../../../../shared/middlewares/validators/validators';
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  putOne,
} from './settings.controller';
import { validSettingsCreate } from './validators/settings.validator';

const router = Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/",validateCreate(validSettingsCreate), postOne);

router.put("/:id", putOne);

router.delete("/:id", deleteOne);

export default router;
