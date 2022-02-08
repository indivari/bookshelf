//Require Mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  book_id: mongoose.Types.ObjectId,
  GoogleBookInfo: Object,
  test_title: String,
});

// Compile model from schema
const BookModel = mongoose.model("books", BookSchema);

const book_instance = new BookModel({ test_title: "testing data" });
book_instance.create();
