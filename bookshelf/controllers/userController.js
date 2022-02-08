const users = require("../model/users");

//GET all users
exports.user_list_get = function (req, res) {
  res.send(users.get_user_details());
  //   res.send("User List");
};

//GET a user
exports.user_details_get = function (req, res) {
  res.send("Get a particular user using email address.");
};

//POST new user
exports.create_user_post = function (req, res) {
  res.send(users.add_user());
};
