const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/donate", bookController.create_book_post);

router.get("/list", bookController.books_list_get);

router.get("/borrow", bookController.book_borrow_post);

router.get("/details", bookController.book_details_get);

router.post("/bulk_load", bookController.insert_bulk_post);

module.exports = router;
