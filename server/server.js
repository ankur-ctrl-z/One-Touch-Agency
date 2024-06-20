const express = require('express');
const { connectDB, InputModelOneTouch, SubscriptionEmailModel } = require('./db.js');
const cors = require('cors');
const z = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Defining schema using Zod
const InputSchema = z.object({
    email: z.string().email('Invalid email address'),
    services: z.string().nonempty('Services is required'),
    message: z.string().nonempty('Message is required')
});

const SubscriptionSchema = z.string().email('Invalid email address');

// Middleware for duplicate email check
async function checkDuplicateEmail(req, res, next) {
    const { email } = req.body;
    try {
        const existingEmail = await InputModelOneTouch.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        next();
    } catch (error) {
        console.error('Error checking duplicate email:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

connectDB();


app.post('/save-email', checkDuplicateEmail, async (req, res) => {
    try {
        const validatedData = InputSchema.parse(req.body);
        const formData = new InputModelOneTouch(validatedData);
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

// Route to handle email subscriptions
app.post('/subscribe', checkDuplicateEmail, async (req, res) => {
    try {
        const validatedData = SubscriptionSchema.parse(req.body);
        const { email } = validatedData;
      
        const existingEmail = await SubscriptionEmailModel.findOne({ email });
      
        if (existingEmail) {
            return res.status(400).json({ error: 'Email is already subscribed' });
        }
      
        const newSubscriptionEmail = new SubscriptionEmailModel({ email });
        await newSubscriptionEmail.save();
      
        res.status(201).json({ message: 'Email subscribed successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors });
        } else {
            console.error('Error subscribing email:', error.message);
            res.status(500).json({ error: 'Server error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
