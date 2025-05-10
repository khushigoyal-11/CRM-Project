import Campaign from '../models/Campaign.js';
import Customer from '../models/Customer.js';
import DeliveryLog from '../models/DeliveryLog.js';
import VendorService from '../services/vendor.service.js';

export const createCampaign = async (req, res) => {
  const { name, rules } = req.body;

  // filter customers
  const audience = await Customer.find(rules);
  const campaign = await Campaign.create({
    name, rules, creator: req.user._id,
    audienceSize: audience.length, sent: 0, failed: 0,
  });

  // log and send messages
  audience.forEach(async cust => {
    const log = await DeliveryLog.create({ campaign: campaign._id, customer: cust._id });
    const result = await VendorService.send(cust, name);
    log.status = result.success ? 'sent' : 'failed';
    log.vendorResponse = result;
    await log.save();
    if (result.success) campaign.sent++; else campaign.failed++;
  });
  await campaign.save();

  res.status(201).json(campaign);
};

export const listCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({ creator: req.user._id }).sort('-createdAt');
  res.json(campaigns);
};
