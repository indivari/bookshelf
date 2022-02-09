//Require Mongoose
var mongoose = require("mongoose");
var { Schema, Query } = mongoose;
const { userBookSchema } = require("../db/userBook.schema");
const { BookModel } = require("./books");

// Compile model from schema
const UserBooksModel = mongoose.model("user_books", userBookSchema);

async function borrowBook({ bookId, userId }) {
  // Insert record to userBooks
  const record = { book_id: bookId, user_id: userId, borrow_date: new Date() };
  const document = new UserBooksModel(record);
  await document.save();

  // Mark the book as unavailable
  return await BookModel.updateOne(
    { _id: bookId },
    { status: "unavailable" }
  ).exec();
}

module.exports = { borrowBook };
