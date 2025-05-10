import Customer from '../models/Customer.js';
import QueueService from '../services/queue.service.js';

export const addCustomer = async (req, res) => {
  const data = req.body;
  // push to validation queue
  await QueueService.enqueue('customers', data);
  res.status(202).json({ message: 'Accepted for processing' });
};

export const getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};
