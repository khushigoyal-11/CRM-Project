import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  spent: { type: Number, default: 0 },
  lastOrderAt: Date,
  tags: [String],
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema);
