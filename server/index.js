import express from 'express';
import mongoose from 'mongoose';

import Quotes from './models/quotes.model.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect('mongodb://127.0.0.1:27017/quotesapi')
  .then(() => console.log('Connected to the database!'))
  .catch(() => {
    console.log('Connection faield!!!');
  });

app.post('/api/quotes', async (req, res) => {
  try {
    const product = await Quotes.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
