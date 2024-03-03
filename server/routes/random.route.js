import express from 'express';
import {
  getRandomBook,
  getRandomQuote,
} from '../controllers/random.controller.js';

const router = express.Router();

// get random Quote from database using quote id
router.get('/random', getRandomQuote);
router.get('/random', getRandomBook);

export default router;
