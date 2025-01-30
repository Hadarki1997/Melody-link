import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        console.log("1️⃣ Request body:", JSON.stringify(req.body, null, 2));
        
        const { name, email, password, userType, instrument } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = { 
            name, 
            email, 
            password: hashedPassword, 
            userType, 
            instrument 
        };
        
        console.log("2️⃣ User data before creating model:", JSON.stringify(userData, null, 2));
        
        const newUser = new User(userData);
        console.log("3️⃣ New user model:", JSON.stringify(newUser.toObject(), null, 2));
        
        const savedUser = await newUser.save();
        console.log("4️⃣ Saved user:", JSON.stringify(savedUser.toObject(), null, 2));
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("❌ Error details:", {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});



export default router;
