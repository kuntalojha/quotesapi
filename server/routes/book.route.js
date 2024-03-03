import express from 'express';

import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
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

// delete Book from from database using Book id
router.delete('/:id', deleteBook);

export default router;
