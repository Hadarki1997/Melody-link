import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// API להרשמה
router.post('/signup', async (req, res) => {
    try {
        console.log('📥 Data received:', req.body); // מדפיס את הנתונים שמגיעים מה-Frontend
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            name: name.toString(), 
            email: email.toString(), 
            password: hashedPassword.toString() 
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('❌ Error in /signup:', error);
        res.status(500).json({ message: 'Error registering user', error });
    }
});


// **שימוש ב- export default**
export default router;
