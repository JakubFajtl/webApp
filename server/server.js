// backend/server.js
const express = require('express');
const { Pool } = require('pg'); // Import the pg library
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost', // Replace with your database host
    database: 'webappDB', // Replace with your database name
    password: 'kuba', // Replace with your database password
    port: 5432, // Default PostgreSQL port
  });

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Route to fetch all rows from the "quotes" table
app.get('/api/quotes', async (req, res) => {
    try {
      // Query the database
      const { rows } = await pool.query('SELECT * FROM quotes');
      
      // Send the rows as a JSON response
      res.json(rows);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/quotes', async (req, res) => {
    try {
      // Extract data from the request body
      const { quotecontent, author, quoteyear } = req.body;
  
      // Validate the required fields
      if (!quotecontent) {
        return res.status(400).json({ error: 'Missing Quote Content' });
      }
  
      // Insert the new row into the database
      const query = `
        INSERT INTO quotes (quotecontent, author, quoteyear)
        VALUES ($1, $2, $3)
        RETURNING *;`; // Return the inserted row
  
      const { rows } = await pool.query(query, [quotecontent, author, quoteyear]);
  
      // Send the inserted row as a JSON response
      res.status(201).json(rows[0]);
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});