const userBooks = require("../model/userBooks");

exports.get_userBooks = async function (req, res) {
  const result = await userBooks.list_userBooks(req.query);
  res.send(result);
};
