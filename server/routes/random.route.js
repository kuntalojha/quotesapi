import express from 'express';
import { getRandomBook, getRandomQuote } from '../controllers/book.controller';

// get random Quote from database using quote id
router.get('/random', getRandomQuote);
router.get('/random', getRandomBook);
