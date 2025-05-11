// src/controllers/order.controller.js

import Order from '../models/Order.js';

/**
 * POST /api/orders
 * Immediately create an order (no queue), return 201 + the new doc.
 */
export const addOrder = async (req, res, next) => {
  try {
    const { customer, amount, items } = req.body;

    if (!customer || !amount || !items) {
      return res
        .status(400)
        .json({ error: 'customer, amount, and items are all required.' });
    }

    const newOrder = await Order.create({ customer, amount, items });
    return res.status(201).json(newOrder);
  } catch (err) {
    return next(err);
  }
};

/**
 * GET /api/orders
 * Fetch & return all orders.
 */
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('customer').lean();
    return res.json(orders);
  } catch (err) {
    return next(err);
  }
};
