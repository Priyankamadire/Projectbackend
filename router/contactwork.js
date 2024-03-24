// Import required modules
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const cors = require('cors');
router.use(cors());
// Route to handle POST request for submitting a contact form
// router.post('/contact_', async (req, res) => {
//     try {
//         // Extract data from request body
//         const { name, email, message } = req.body;

//         // Create a new contact document
//         const newContact = new Contact({
//             name,
//             email,
//             message
//         });

//         // Save the contact document to the database
//         await newContact.save();

//         // Respond with success message
//         res.status(201).json({ message: 'Contact form submitted successfully' });
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// Export the router
module.exports = router;
