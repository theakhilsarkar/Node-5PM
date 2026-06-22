import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    publishedYear: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Book", bookSchema); // return = CRUD
