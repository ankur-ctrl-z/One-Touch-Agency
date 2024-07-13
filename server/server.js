const express = require('express');
const { connectDB, InputModelOneTouch } = require('./db.js');
const cors = require('cors');
const z = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Defining schema using Zod
const InputSchema = z.object({
    name: z.string().nonempty('Name is required'),
    phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    message: z.string().nonempty('Message is required')
});

// Middleware for duplicate phone number check
async function checkDuplicatePhone(req, res, next) {
    const { phone } = req.body;
    try {
        const existingPhone = await InputModelOneTouch.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({ error: 'Phone number already exists' });
        }
        next();
    } catch (error) {
        console.error('Error checking duplicate phone:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

connectDB();

app.post('/save-phone', checkDuplicatePhone, async (req, res) => {
    try {
        const { name, phone, message } = req.body;
        const formData = new InputModelOneTouch({
            name,
            phone: parseInt(phone),
            message
        });
        await formData.save();
        res.status(200).send('Form data saved successfully.');
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors });
        } else {
            console.error('Error saving data:', error.message);
            res.status(500).send('Error saving data: ' + error.message);
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});




