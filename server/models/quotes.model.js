import mongoose from 'mongoose';

const quotesSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
      default: 0,
    },
    book_no: {
      type: Number,
      require: true,
      default: 1,
    },
    quote: {
      type: String,
      require: true,
    },
    category: {
      type: Array,
      require: true,
    },
    keyword: {
      type: Array,
      require: true,
    },
    auther: {
      type: String,
      require: true,
      default: 'Darius Foroux!',
    },
    page: {
      type: Number,
      require: true,
      default: 0,
    },
    details: {
      auther: String,
      page: Number,
      type: Array,
      require: true,
      default: { author: 'Darius Foroux!!', page: 11 },
    },
  },
  {
    timestamps: true,
  }
);

const Quotes = mongoose.model('all_quotes', quotesSchema);

export default Quotes;
