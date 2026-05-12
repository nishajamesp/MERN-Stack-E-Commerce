import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [],

    totalAmount: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
