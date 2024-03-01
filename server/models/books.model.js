import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema(
  {
    book_id: {
      type: Number,
      required: [true, 'Please enter book no'],
      default: 1,
    },
    book_name: {
      type: String,
      required: [true, 'Please enter book name.'],
      default: 1,
    },
    book_type: {
      type: [String],
      required: [true, 'Please enter no'],
      default: 'self helf',
    },
    book_author: {
      type: String,
      required: [true, 'Please enter book name.'],
      default: 'Darius Foroux',
    },
    total_page: {
      type: Number,
      required: false,
      default: 158,
    },
    price: {
      type: Number,
      required: false,
      default: 100,
    },
    buying_details: {
      buying_type: {
        type: String,
        default: 'Ofline',
        required: false,
      },
      buying_place: {
        type: String,
        default: 'Kolkata International Book Fair 2024',
        required: false,
      },
      shop_name: {
        type: String,
        default: 'Penguin Random House India PVT LTD',
        required: false,
      },
      shop_location: {
        type: String,
        default: 'Hall-II, Stall-H42',
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('all_books', booksSchema);

export default Book;
