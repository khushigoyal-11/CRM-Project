const Campaign = require('../models/Campaign');
const { evaluateRules } = require('../lib/rules');
const { enqueue } = require('../services/queue.service');

exports.create = async (req, res, next) => {
  try {
    const { name, rules } = req.body;
    const userId = req.user.id;
    const audienceSize = await evaluateRules(rules);
    const campaign = await Campaign.create({ name, rules, createdBy: userId, stats:{ audienceSize } });
    await enqueue(campaign._id);
    res.status(201).json({ campaignId: campaign._id, audienceSize });
  } catch (err) { next(err); }
};

exports.preview = async (req, res, next) => {
  try {
    const { rules } = req.body;
    const audienceSize = await evaluateRules(rules);
    res.json({ audienceSize });
  } catch(err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user.id }).sort('-createdAt');
    res.json(campaigns);
  } catch(err) { next(err); }
};

exports.callback = async (req, res, next) => {
  try {
    const { campaignId, customerId, status } = req.body;
    await Campaign.findByIdAndUpdate(campaignId, {
      $inc: { 'stats.sent': status==='success'?1:0, 'stats.failed': status!=='success'?1:0 },
      $push: { logs: { customerId, status, timestamp: new Date() } }
    });
    res.sendStatus(200);
  } catch(err) { next(err); }
};