import express from 'express';
import { body } from 'express-validator';
import { addCustomer, getCustomers } from '../controllers/customer.controller.js';
import { validate } from '../utils/validator.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', protect, [body('email').isEmail(), body('name').notEmpty()], validate, addCustomer);
router.get('/', protect, getCustomers);

export default router;