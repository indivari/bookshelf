const mongoose = require("mongoose"),
  Admin = mongoose.mongo.Admin;
const setupUserSchema = require("./user.schema");
const userModel = require("../model/users");

//mongoDB Class
class MongoDB {
  constructor() {
    this.uri = `mongodb+srv://assemblr_dev:${process.env.MONGOPWD1}@bookshelf.rmtrd.mongodb.net/bookshelf?retryWrites=true&w=majority`;
  }

  //connect to MongoDB Atlas Instance
  async connect() {
    //make async call with arrow fucntion format.
    await mongoose.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((MongooseNode) => {
      const nativeConnection = MongooseNode.connections[0];
      // connection established - use the Admin object grabbed above in the require
      new Admin(nativeConnection.db).listDatabases((err, result) => {
        console.log("Successfully Connected to MongDB - bookshelf");
      });
    });
  }
}

setupUserSchema.initialiseUserSchema();

module.exports = MongoDB;
