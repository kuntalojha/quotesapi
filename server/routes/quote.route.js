import express from 'express';

import { createQuote } from '../controllers/quote.controller';

const router = express.Router();

// post the data or insert data into the database
router.post('/', createQuote);
