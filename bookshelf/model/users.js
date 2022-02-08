const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserModel = require("../db/user.schema");

class User {
  constructor() {
    (this.fullname = ""), (this.email = ""), (this.address = ""), (this.latlng = { lat: 0, lng: 0 }), (this.password = "");
  }
}

const NewUser = mongoose.model("users", UserModel.userSchema);

function get_user_details() {
  return { message: "getting user details from the database in the model" };
}

function add_user() {
  const document = new NewUser();
  return { message: "adding a user - hitting the model" };
}
module.exports = {
  User,
  add_user,
  get_user_details,
};
