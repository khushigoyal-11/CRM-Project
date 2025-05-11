import express from 'express';
import { addOrder, getOrders } from '../controllers/order.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { body } from 'express-validator';
import { validate } from '../utils/validator.js';

const router = express.Router();

router.post(
  '/',
  protect,
  [
    body('customer').notEmpty(),
    body('amount').isNumeric(),
    body('items').isArray(),
  ],
  validate,
  addOrder
);

router.get('/', protect, getOrders);

export default router;
