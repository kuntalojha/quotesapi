import Book from '../models/books.model.js';

export const getRandomBook = async (req, res) => {
  try {
    // Find the total number of book
    const totalBooks = await Book.countDocuments();

    // Generate a random index (1 to totalQutes) within the range of the total number of books
    const randomIndex = Math.floor(Math.random() * totalBooks) + 1;

    // Find a random book by skipping to the random index
    const randomBook = await Book.findOne().skip(randomIndex);
    // Return the random book
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
