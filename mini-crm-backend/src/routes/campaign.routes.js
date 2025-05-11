import { Router } from 'express';
import * as ctrl from '../controllers/campaign.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = Router();
router.use(auth);
router.post('/',       ctrl.create);
router.post('/preview', ctrl.preview);
router.get('/',         ctrl.list);
router.post('/callback',ctrl.callback);

export default router;