import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://laferreirabianca:Biarock12@organiizeme.k2u4n0c.mongodb.net/organize-me"
);

let db = mongoose.connection;

export default db;
