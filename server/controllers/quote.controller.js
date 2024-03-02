import Quote from '../models/quotes.model';

// This is use for creat quote in database
export const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
