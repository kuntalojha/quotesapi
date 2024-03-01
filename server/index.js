import express from 'express';
import mongoose from 'mongoose';

import Quote from './models/quotes.model.js';
import Book from './models/books.model.js';

const app = express();
const PORT = 3000;
app.use(express.json()); // Add this line to parse JSON data

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect('mongodb://127.0.0.1:27017/quotesapi')
  .then(() => console.log('Connected to the database!'))
  .catch(() => {
    console.log('Connection faield!!!');
  });

//  add quote
app.post('/api/quotes', async (req, res) => {
  try {
    const product = await Quote.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add book
app.post('/api/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
