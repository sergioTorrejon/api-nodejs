import { Router } from 'express';
import adminRoutes from '../../core/modules/admin/admin.routes';
import userRoutes from '../../core/modules/admin/schemas/user/user.routes';




const router = Router();

router.use("/admin", adminRoutes);
router.use("/users", userRoutes);


export default router;