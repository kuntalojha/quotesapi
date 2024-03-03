import express from 'express';
import mongoose from 'mongoose';

import quoteRoute from './routes/quote.route.js';
import bookRoute from './routes/book.route.js';
import randomRoute from './routes/random.route.js';

const app = express();
const PORT = 3000;
app.use(express.json()); // Add this line to parse JSON data
// This one is use for send data as a form url
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://127.0.0.1:27017/quotesapi')
  .then(() => console.log('Connected to the database!'))
  .catch(() => {
    console.log('Connection faield!!!');
  });

// ROUTER Here
// This is add quoteRoute
app.use('/api/quotes', quoteRoute);

// This is add quoteRoute
app.use('/api/books', bookRoute);

app.use('/api/quote/', randomRoute);
app.use('/api/book/', randomRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
