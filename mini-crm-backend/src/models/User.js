import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  picture: String,
}, { timestamps: true });

export default mongoose.model('User', UserSchema);



