const mongoose = require('mongoose');
const Campaign = require('../models/Campaign');
const { dequeue } = require('../services/queue.service');
const { sendMessage } = require('../services/vendor.service');
const axios = require('axios');

mongoose.connect(process.env.DB_URI).then(async () => {
  while(true) {
    const campaignId = await dequeue();
    if (!campaignId) { await new Promise(r=>setTimeout(r,1000)); continue; }
    const campaign = await Campaign.findById(campaignId);
    const customers = await require('../lib/rules').evaluateRules(campaign.rules) /* or fetch docs */;
    for (const cust of customers) {
      const result = await sendMessage({ campaignId, customer: cust });
      await axios.post('http://localhost:3000/api/campaign/callback', result);
    }
  }
});