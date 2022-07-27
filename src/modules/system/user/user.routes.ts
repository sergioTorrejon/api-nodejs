import { Router } from 'express';

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from './user.controller';
import { val } from './validators/val';

const router = Router();

router.get("/", getUsers);

router.get("/:id", val, getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
