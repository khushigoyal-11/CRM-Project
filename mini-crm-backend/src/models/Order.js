import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  amount: Number,
  items: [String],
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
