import mongoose from 'mongoose';

const quotesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, 'Please enter no'],
      default: 1,
    },
    book_id: {
      type: Number,
      required: [true, 'Please enter book no'],
      default: 1,
    },
    quote: {
      type: String,
      required: [true, 'Please enter your Quote'],
    },
    category: {
      type: [String],
      required: [true, 'Please enter category.'],
    },
    keyword: {
      type: [String],
      required: [true, 'Please enter keyword.'],
    },
    details: {
      author: {
        type: String,
        default: 'Darius Foroux',
        required: true,
      },
      page: {
        type: Number,
        default: 10,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Quotes = mongoose.model('all_quotes', quotesSchema);

export default Quotes;
