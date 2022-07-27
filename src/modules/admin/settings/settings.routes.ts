import { Router } from 'express';

import {
  getAll,
  getOne,
  postOne,
} from './settings.controller';

const router = Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", postOne);

/* router.put("/:id", updateUser);

router.delete("/:id", deleteUser); */

export default router;
