import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const googleCallback = async (req, res) => {
  // passport sets req.user
  const user = req.user;
  const token = generateToken(user._id);
  res.json({ token, user });
};
