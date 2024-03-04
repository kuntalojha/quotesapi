import express from 'express';
import { getRandomQuote } from '../controllers/randomquote.controller.js';

const router = express.Router();

// get random Quote from database using quote id
router.get('/random', getRandomQuote);

export default router;
