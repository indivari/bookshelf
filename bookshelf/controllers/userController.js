const users = require("../model/users");

//GET all users
exports.user_list_get = function (req, res) {
  res.send(users.get_user_details());
  //   res.send("User List");
};

//GET a user
exports.user_details_get = async function (req, res) {
  console.log(req.query);
  const result = await users.get_user_details(req.query);
  if (result.success) res.send(result);
  else res.send(result, 401);
};

//POST new user
exports.create_user_post = async function (req, res) {
  const result = await users.add_user(req.body);
  res.send(result, 201);
};
