const express = require('express');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database('users.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userid TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`);
  }
});

// User registration
app.post('/register', async (req, res) => {
  const { userid, password } = req.body;
  if (!userid || !password) {
    return res.status(400).send('User ID and password are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run(`INSERT INTO users (userid, password) VALUES (?, ?)`, [userid, hashedPassword], function(err) {
      if (err) {
        res.status(500).send('Error registering new user');
      } else {
        res.status(201).send({ userid: userid, id: this.lastID });
      }
    });
  } catch {
    res.status(500).send();
  }
});

// User login
app.post('/login', (req, res) => {
  const { userid, password } = req.body;
  if (!userid || !password) {
    return res.status(400).send('User ID and password are required');
  }

  db.get(`SELECT * FROM users WHERE userid = ?`, [userid], async (err, user) => {
    if (err) {
      return res.status(500).send('Error during login');
    }

    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

