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

connectDB();

app.post('/save-phone', async (req, res) => {
    try {
        // Validate the request body against the schema
        const formData = InputSchema.parse(req.body);

        // If validation passes, save the data to the database
        const inputModel = new InputModelOneTouch({
            name: formData.name,
            phone: parseInt(formData.phone),
            message: formData.message
        });
        await inputModel.save();

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




