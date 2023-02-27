import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String },
  },
  {
    versionKey: false,
  }
);

const categories = mongoose.model("categories", categorySchema);

export default categories;
