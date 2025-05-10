import Order from '../models/Order.js';
import QueueService from '../services/queue.service.js';

export const addOrder = async (req, res) => {
  const data = req.body;
  await QueueService.enqueue('orders', data);
  res.status(202).json({ message: 'Accepted for processing' });
};

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate('customer');
  res.json(orders);
};
