const express = require('express');
const { connectDB, InputModelOneTouch, SubscriptionEmailModel } = require('./db.js');
const nodemailer = require('nodemailer');
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

// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;

// // Configuring Nodemailer
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: EMAIL_USER,
//         pass: EMAIL_PASS
//     }
// });

// // Route to handle form submission and save email
// app.post('/save-email', checkDuplicateEmail, async (req, res) => {
//     try {
//         const validatedData = InputSchema.parse(req.body);
//         const formData = new InputModelOneTouch(validatedData);
//         await formData.save();

//         const mailOptions = {
//             from: EMAIL_USER,
//             to: EMAIL_USER,
//             subject: 'New Form Submission',
//             text: `You have a new form submission:\n\nEmail: ${validatedData.email}\nServices: ${validatedData.services}\nMessage: ${validatedData.message}`
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error('Error sending email:', error.message);
//                 return res.status(500).send('Error sending email: ' + error.message);
//             }
//             res.status(200).send('Form data saved and email sent successfully.');
//         });
//     } catch (error) {
//         if (error instanceof z.ZodError) {
//             res.status(400).json({ error: error.errors });
//         } else {
//             console.error('Error saving data:', error.message);
//             res.status(500).send('Error saving data: ' + error.message);
//         }
//     }
// });


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
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
  
    try {
      const existingEmail = await SubscriptionEmailModel.findOne({ email });
  
      if (existingEmail) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      }
  
      const newSubscriptionEmail = new SubscriptionEmailModel({ email });
      await newSubscriptionEmail.save();
  
      res.status(201).json({ message: 'Email subscribed successfully' });
    } catch (error) {
      console.error('Error subscribing email:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
