// Vercel Serverless Function Entry Point
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// MySQL Database Connection Helper
function createDatabaseConnection() {
  // Support both DATABASE_URL format and individual environment variables
  if (process.env.DATABASE_URL) {
    // Parse DATABASE_URL format: mysql://user:password@host:port/database
    const url = new URL(process.env.DATABASE_URL);
    return mysql.createConnection({
      host: url.hostname,
      port: url.port || 3306,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1), // Remove leading '/'
      connectTimeout: 10000,
      timeout: 10000,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
    });
  } else {
    // Fallback to individual environment variables
    return mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'yashaswi_finserv',
      connectTimeout: 10000,
      timeout: 10000
    });
  }
}

// Create database connection (will be reused across requests in serverless)
let db = null;

function getDatabaseConnection() {
  if (!db || db.state === 'disconnected') {
    db = createDatabaseConnection();
    db.connect((err) => {
      if (err) {
        console.error('Database connection error:', err.message);
      } else {
        console.log('MySQL Database connected successfully');
      }
    });
    
    // Handle connection errors
    db.on('error', (err) => {
      console.error('Database error:', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        db = null; // Reset connection on error
      }
    });
  }
  return db;
}

// Contact Form API Endpoint
app.post('/api/contact', (req, res) => {
  const { name, phone, email, interest_type } = req.body;

  // Validation
  if (!name || !phone || !interest_type) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name, Phone, and Interest Type are required fields' 
    });
  }

  // Phone validation (basic)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid 10-digit phone number' 
    });
  }

  const query = 'INSERT INTO contact_submissions (name, phone, email, interest_type) VALUES (?, ?, ?, ?)';
  const db = getDatabaseConnection();
  
  // Set query timeout
  const queryTimeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ 
        success: false, 
        message: 'Database query timeout. Please try again.' 
      });
    }
  }, 8000); // 8 second timeout
  
  db.query(query, [name, phone, email || null, interest_type], (err, result) => {
    clearTimeout(queryTimeout);
    
    if (err) {
      console.error('Database error:', err);
      if (!res.headersSent) {
        // Check for specific error types
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNREFUSED') {
          return res.status(503).json({ 
            success: false, 
            message: 'Database connection lost. Please check MySQL server is running.' 
          });
        }
        return res.status(500).json({ 
          success: false, 
          message: 'Error submitting form: ' + err.message 
        });
      }
      return;
    }

    if (!res.headersSent) {
      res.json({ 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.' 
      });
    }
  });
});

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/contact.html'));
});

// Export the Express app as a serverless function
module.exports = app;
