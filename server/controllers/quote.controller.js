import Quote from '../models/quotes.model.js';

// This is use for creat quote in database
export const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for update quote in database
export const updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.find({ id: id });
    if (!quote) {
      return res.status(404).json({ message: 'Product not found!' });
    }
    const updatedQuote = await Quote.findOneAndUpdate(
      { id: parseInt(id) },
      req.body
    );
    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for get all the data from database
export const getQuotes = async (req, res) => {
  try {
    const quote = await Quote.find({});
    // Check if any  quote  was found
    if (!quote) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'No quotes found' });
    }
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// This is use for get data from database using id
export const getQuote = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the quote with the specified id
    const quote = await Quote.findOne({ id: parseInt(id) });
    // Check if a quote with the specified id was found
    if (!quote) {
      // If no quote is found, respond with a 404 Not Found status
      return res.status(404).json({ message: 'Quote not found' });
    }

    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  The getRendomQuote is not working properlys
// This is use for getting a random quote from database
export const getRandomQuote = async (req, res) => {
  try {
    // Find the total number of quotes
    const totalQuotes = await Quote.countDocuments();

    // Generate a random index (1 to totalQutes) within the range of the total number of quotes
    const randomIndex = Math.floor(Math.random() * totalQuotes) + 1;

    // Find a random quote by skipping to the random index
    const randomQuote = await Quote.findOne().skip(randomIndex);
    console.log(randomIndex);

    // Return the random quote
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getRandomQuote = async (req, res) => {
//   try {
//     // Find the total number of quotes
//     const totalQuotes = await Quote.countDocuments();
//     console.log(totalQuotes);
//     // Generate a random index (0 to totalQuotes) within the range of the total number of quotes
//     const randomIndex = Math.floor(Math.random() * totalQuotes);
//     console.log(randomIndex);
//     const randomQuote = await Quote.findOne({ id: parseInt(randomIndex) });

//     // Return the random quote
//     res.status(200).json(randomQuote);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getRandomQuote = async (req, res) => {
//   try {
//     // Find the total number of quotes
//     const totalQuotes = await Quote.countDocuments();

//     // Generate a random index (0 to totalQuotes) within the range of the total number of quotes
//     const randomIndex = Math.floor(Math.random() * totalQuotes);

//     // Find a random quote using the generated random index
//     const randomQuote = await Quote.findOne().skip(randomIndex);

//     // Return the random quote
//     res.status(200).json(randomQuote);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Not work properly
// This is use for delete quote using id from database
export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuote = await Quote.deleteOne({ id: parseInt(id) });
    res.status(200).json(deleteQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
