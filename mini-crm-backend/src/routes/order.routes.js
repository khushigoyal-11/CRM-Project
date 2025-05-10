import express from 'express';
import { body } from 'express-validator';
import { addOrder, getOrders } from '../controllers/order.controller.js';
import { validate } from '../utils/validator.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', protect, [body('customer').isMongoId(), body('amount').isNumeric()], validate, addOrder);
router.get('/', protect, getOrders);

export default router;
