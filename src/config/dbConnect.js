import mongoose from "mongoose";

//REMOVE THIS EVERY TIME
mongoose.connect(
  ""
);

let db = mongoose.connection;

export default db;
