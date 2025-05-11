const mongoose = require('mongoose');
const CampaignSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  rules:      { type: Array, required: true },
  createdBy:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stats: {
    audienceSize: { type: Number, default: 0 },
    sent:         { type: Number, default: 0 },
    failed:       { type: Number, default: 0 }
  },
  status:     { type: String, enum: ['pending','processing','completed'], default: 'pending' },
  logs: [{
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    status:     String,
    timestamp:  Date
  }]
}, { timestamps: true });
module.exports = mongoose.model('Campaign', CampaignSchema);