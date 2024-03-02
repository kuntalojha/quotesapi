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

// update quote using id
app.put('/api/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const quote = await Quote.find({ id: id });
    // console.log(quote);
    if (!quote) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    const updatedQuote = await Quote.findOneAndUpdate(
      { id: parseInt(id) },
      req.body
    );
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const quote = await Quote.find({});
    // Check if any  quote  was found
    if (!quote) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fiend quote using id
app.get('/api/quotes/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the quote with the specified id
    const quote = await Quote.findOne({ id: parseInt(id) });
    // Check if a quote with the specified id was found
    if (!quote) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'Quote not found' });
    }

    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// New route for getting a random quote
app.get('/api/quote/random', async (req, res) => {
  try {
    // Find the total number of quotes
    const totalQuotes = await Quote.countDocuments();

    // Generate a random index (1 to ) within the range of the total number of quotes
    const randomIndex = Math.floor(Math.random() * totalQuotes) + 1;

    // Find a random quote by skipping to the random index
    const randomQuote = await Quote.findOne().skip(randomIndex);
    console.log(randomIndex);

    // Return the random quote
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete quote

// Add book
app.post('/api/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update book using id
app.put('/api/books/:book_id', async (req, res) => {
  try {
    const { book_id } = req.params;
    console.log(book_id);
    const book = await Book.find({ book_id: book_id });
    console.log(book);
    if (!book) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    const updatedBook = await Book.findOneAndUpdate(
      { book_id: parseInt(book_id) },
      req.body
    );
    console.log(req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all books
app.get('/api/books', async (req, res) => {
  try {
    const book = await Book.find({});
    // Check if a book with the specified book_id was found
    if (!book) {
      // If no book is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No books found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get books using book_id
app.get('/api/books/:book_id', async (req, res) => {
  try {
    const { book_id } = req.params;

    // Find the book with the specified book_id
    const book = await Book.findOne({ book_id: parseInt(book_id) });
    // Check if a book with the specified book_id was found
    if (!book) {
      // If no book is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// New route for getting a random book
app.get('/api/book/random', async (req, res) => {
  try {
    // Find the total number of quotes
    const totalBooks = await Book.countDocuments();

    // Generate a random index (0 to 26) within the range of the total number of quotes
    const randomIndex = Math.floor(Math.random() * totalBooks);

    // Find a random quote by skipping to the random index
    const randomBooks = await Book.findOne().skip(randomIndex);

    // Return the random quote
    res.status(200).json(randomBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
