import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['singer', 'musician'], required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // 👈 כל משתמש חדש הוא 'user'
  instrument: { type: String, required: function() { return this.userType === 'musician'; } } // חובה רק למוזיקאים
}, { timestamps: true });

export default mongoose.model('User', userSchema);
