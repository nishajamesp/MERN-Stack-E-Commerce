import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
