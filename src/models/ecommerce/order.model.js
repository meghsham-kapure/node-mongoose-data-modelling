import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product reference is required"],
  },

  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
});

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer reference is required"],
    },

    adrress: {
      type: String,
      required: [true, "Delivery address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters"],
    },

    status: {
      type: String,
      enum: {
        values: ["PENDING", "TRANSIT", "CANCELLED", "DELIVERED"],
        message:
          "Invalid Status, Allowed Status Value ['PENDING', 'TRANSIT', 'CANCELLED', 'DELIVERED']",
      },
      uppercase: true,
      trim: true,
      default: "PENDING",
    },

    orderPrice: {
      type: Number,
      required: [true, "Order price is required"],
      min: [0, "Order price cannot be negative"],
    },

    orderItems: {
      type: [orderItemSchema],
      required: [true, "Order items are required"],
    },
  },
  {
    timestamps: true,
  },
);

export const Order = mongoose.model("order", orderSchema);
