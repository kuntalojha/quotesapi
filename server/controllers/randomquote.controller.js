import Quote from '../models/quotes.model.js';

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
    // console.log(randomIndex);

    // Return the random quote
    res.status(200).json(randomQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
