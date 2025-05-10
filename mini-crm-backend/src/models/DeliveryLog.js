import mongoose from 'mongoose';

const DeliveryLogSchema = new mongoose.Schema({
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  status: { type: String, enum: ['sent','failed','pending'], default: 'pending' },
  vendorResponse: Object,
}, { timestamps: true });

export default mongoose.model('DeliveryLog', DeliveryLogSchema);
