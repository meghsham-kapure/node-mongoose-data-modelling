import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: { type: [orderItemSchema] },

    // does the same but with different approch
    // orderItems: {
    // type: [
    //     {
    //     productId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Product",
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true,
    //     },
    //     },
    // ],
    // },

    adrress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("order", orderSchema);
