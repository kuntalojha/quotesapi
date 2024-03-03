import express from 'express';

import {
  createQuote,
  deleteQuote,
  getQuote,
  getQuotes,
  updateQuote,
} from '../controllers/quote.controller.js';

import {
  getRandomBook,
  getRandomQuote,
} from '../controllers/random.controller.js';
const router = express.Router();

// post the data or insert data into the database
router.post('/', createQuote);

// edit or update the data into the database
router.put('/:id', updateQuote);

// get all the quotes from database
router.get('/', getQuotes);

// get quote from database using quote id
router.get('/:id', getQuote);

// delete Quote from from database using quote id
router.delete('/:id', deleteQuote);

export default router;
