import Book from '../models/books.model.js';

// This is use for creat book in database
export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for update book in database using book_id
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.find({ book_id: parseInt(id) });
    if (!book) {
      return res.status(404).json({ message: 'Product not found!' });
    }
    const updatedBook = await Book.findOneAndUpdate(
      { book_id: parseInt(id) },
      req.body
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for get all the data from database
export const getBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    // Check if any  book  was found
    if (!book) {
      // If no book is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for get data from database using book_id
export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the book with the specified book_id
    const book = await Book.findOne({ book_id: parseInt(id) });
    // Check if a book with the specified book_id was found
    if (!book) {
      // If no book is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Not working
//  The getRendomBook is not working properlys
// This is use for getting a random book from database
// export const getRandomBook = async (req, res) => {
//   try {
//     // Find the total number of books
//     const totalBooks = await Book.countDocuments();
//     console.log(totalBooks);
//     // Generate a random index (1 to totalQutes) within the range of the total number of books
//     const randomIndex = Math.floor(Math.random() * totalBooks) + 1;
//     // Find a random book by skipping to the random index
//     const randomBook = await Book.findOne().skip(randomIndex);
//     console.log(randomIndex);

//     // const randomBook = await Book.findOne({ book_id: parseInt(randomIndex) });

//     // Return the random book
//     res.status(200).json(randomBook);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getRandomBook = async (req, res) => {
  try {
    // Find the total number of books
    // const totalBooks = await Book.countDocuments();

    const { id } = req.params;
    // Find the book with the specified book_id
    const book = await Book.findOne({ book_id: parseInt(id) });
    // Return the random book
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for delete book using book_id from database
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.deleteOne({ book_id: parseInt(id) });
    res.status(200).json(deleteBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
