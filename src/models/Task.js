import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  category: { type: String, required: true },
  initialDate: { type: String },
  finalDate: { type: String },
  description: { type: String },
});

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;
