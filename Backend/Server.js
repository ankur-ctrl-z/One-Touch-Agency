import express from 'express';
import bodyParser from 'body-parser';
import SiteForgeInputModel from './db';
import connectDB from './db';
import nodemailer from 'nodemailer';
import cors from 'cors';
import zod from 'zod'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const inputsSchema = zod.object({
    email: zod.string().email(),
    message: zod.string(),
    services: zod.string()
})

// middleware for duplicate email 

async function checkDuplicateEmail (req,res,next) {
    const {email} = req.body;
    const existingEmail = await SiteForgeInputModel.findOne({email})

    if (existingEmail) {
        return res.status(400).json({
            error: 'Email already exists'
        });
    }
    next();

}

connectDB();

const EMAIL_USER = 'your-email@gmail.com';
const EMAIL_PASS = 'your-email-password';

// sending data to client's email

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
})

// defining routes

app.post('/submit', async (req, res) => {
    try {
      const formData = new FormData(req.body);
      await formData.save();
  
      const mailOptions = {
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: 'New Form Submission',
        text: `You have a new form submission:\n\nEmail: ${req.body.email}\nService: ${req.body.service}\nMessage: ${req.body.message}`
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

app.post('/save-email',checkDuplicateEmail, async function(req,res){
    const {email, message, services} = req.body;

    const validateData = inputsSchema.safeParse({email, message, services});

    if (!validateData.success) {
        return res.status(400).json({error: 'Invalid data'})
    }
       const newEntry = new SiteForgeInputModel(validateData.data)  
    
    try {
        await newEntry.save();
        res.status(200).json({
            message: 'Data saved successfully',
            data: newEntry
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

app.listen(PORT, function(req,res){
    console.log(`Server is running on http://localhost:${PORT}`)
})

