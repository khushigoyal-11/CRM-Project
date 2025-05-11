// controllers/customer.controller.js

import Customer from '../models/Customer.model.js';

/**
 * POST /api/customers
 * Immediately create a customer in Mongo (no queue),
 * return 201 + the new record.
 */
export const addCustomer = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    // (You already validated name/email; add phone validation too)
    if (!phone) {
      return res.status(400).json({ error: 'Phone is required.' });
    }

    const newCustomer = await Customer.create({ name, email, phone });

    // 201 Created + the created document
    return res.status(201).json(newCustomer);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /api/customers
 * Fetch and return all customers.
 */
export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find().lean();
    return res.json(customers);
  } catch (err) {
    return next(err);
  }
};
