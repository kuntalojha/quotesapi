import express from 'express';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  getRandomBook,
  updateBook,
} from '../controllers/book.controller.js';

const router = express.Router();

// post the data or insert data into the database
router.post('/', createBook);

// edit or update the data into the database
router.put('/:id', updateBook);

// get all the Books from database
router.get('/', getBooks);

// get Book from database using Book id
router.get('/:id', getBook);

// Not working properly
// get random Book from database using Book id
router.get('/random', getRandomBook);

// delete Book from from database using Book id
router.delete('/:id', deleteBook);

export default router;
