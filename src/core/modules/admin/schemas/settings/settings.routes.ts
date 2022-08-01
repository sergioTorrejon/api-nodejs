import { Router } from 'express';

import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  putOne,
} from './settings.controller';
import { valid } from './validators/settings.validator';

const router = Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/",valid, postOne);

router.put("/:id", putOne);

router.delete("/:id", deleteOne);

export default router;
