const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const path = require('path');

// Create an Express application
const app = express();

// Use body-parser middleware to handle JSON data
app.use(bodyParser.json());

// Serve static files (if you have a front-end in a "public" directory)
app.use(express.static(path.join(__dirname, 'public')));

// Set up JSON Server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares); // Set default middlewares (logger, static, cors, no-cache)
app.use('/api', router); // Use JSON Server router with a base URL

// Define a custom route (for additional server logic)
app.post('/api/register', async (req, res) => {
    try {
        // Access JSON Server's router to handle the request
        const db = router.db; // Get the lowdb instance from JSON Server
        const { name, email, password } = req.body;

        // Simple validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = db.get('users').find({ email }).value();
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Add new user to the database
        db.get('users').push({ name, email, password }).write();

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
