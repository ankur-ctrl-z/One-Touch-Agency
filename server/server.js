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
    email: z.string().email('Invalid email address'),
    message: z.string().nonempty('Message is required')
});

// Middleware for duplicate email check
async function checkDuplicateEmail(req, res, next) {
    const { email } = req.body;
    try {
        const existingEmail = await InputModelOneTouch.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' });
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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

