import mongoose from 'mongoose';

const testSchema = new mongoose.Schema(
  {
    // no: {
    //   type: Number,
    //   required: true,
    //   default: 1,
    // },
    // book_no: {
    //   type: Number,
    //   required: true,
    //   default: 1,
    // },
    // name: {
    //   type: String,
    //   // required: true,
    // },
    // category: {
    //   type: [String],
    //   required: true,
    //   // default: ['Hello', 'World'],
    // },
    // keyword: {
    //   type: [String],
    //   required: true,
    //   // default: ['Hello', 'World'],
    // },
    // details: {
    //   author: {
    //     type: String,
    //     default: 'Darius Foroux',
    //     required: true,
    //   },
    //   page: {
    //     type: Number,
    //     default: 10,
    //     required: true,
    //   },
    // },

    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model('test', testSchema);

export default Test;
