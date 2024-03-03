import express from 'express';

import {
  createQuote,
  deleteQuote,
  getQuote,
  getQuotes,
  getRandomQuote,
  updateQuote,
} from '../controllers/quote.controller.js';

const router = express.Router();

// post the data or insert data into the database
router.post('/', createQuote);

// edit or update the data into the database
router.put('/:id', updateQuote);

// get all the quotes from database
router.get('/', getQuotes);

// get quote from database using quote id
router.get('/:id', getQuote);

// Not working properly
// get random Quote from database using quote id
router.get('/random', getRandomQuote);

// delete Quote from from database using quote id
router.delete('/:id', deleteQuote);

export default router;
