const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/add", userController.create_user_post);

router.get("/list", userController.user_list_get);

router.get("/details", userController.user_details_get);

module.exports = router;
