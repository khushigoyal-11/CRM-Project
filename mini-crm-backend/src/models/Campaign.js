import mongoose from 'mongoose';

const CampaignSchema = new mongoose.Schema({
  name: String,
  rules: Object,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  audienceSize: Number,
  sent: Number,
  failed: Number,
}, { timestamps: true });

export default mongoose.model('Campaign', CampaignSchema);
