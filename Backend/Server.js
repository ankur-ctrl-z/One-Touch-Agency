const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, SiteForgeInputModel } = require('./db'); // Ensure this file exports these correctly
const nodemailer = require('nodemailer');
const cors = require('cors');
const zod = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const emailSchema = zod.object({
  email: zod.string().email(),
});

const inputsSchema = zod.object({
  email: zod.string().email(),
  message: zod.string(),
  service: zod.string(),
});

async function checkDuplicateEmail(req, res, next) {
  const { email } = req.body;
  const existingEmail = await SiteForgeInputModel.findOne({ email });

  if (existingEmail) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  next();
}

connectDB();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Route for submitting data with email, services, and message
app.post('/submit', async (req, res) => {
  const validateData = inputsSchema.safeParse(req.body);

  if (!validateData.success) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    const formData = new SiteForgeInputModel(validateData.data);
    await formData.save();

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: 'New Form Submission',
      text: `You have a new form submission:\n\nEmail: ${req.body.email}\nService: ${req.body.service}\nMessage: ${req.body.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email: ' + error.message);
      }
      res.status(200).send('Form data saved and email sent successfully.');
    });
  } catch (err) {
    res.status(500).send('Error saving data: ' + err.message);
  }
});

// Route for submitting only email
app.post('/save-email', checkDuplicateEmail, async (req, res) => {
  const { email } = req.body;
  const validateData = emailSchema.safeParse({ email });

  if (!validateData.success) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  const newEntry = new SiteForgeInputModel(validateData.data);

  try {
    await newEntry.save();
    res.status(200).json({
      message: 'Data saved successfully',
      data: newEntry,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});













