import express from 'express';
import { getRandomBook } from '../controllers/randombook.controller.js';

const router = express.Router();

// get random book from database using book_id
router.get('/random', getRandomBook);

export default router;
