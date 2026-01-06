import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
      minlength: [5, "Description must be at least 5 characters"],
    },
    productImage: {
      type: String,
      required: [true, "Product image is required"],
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
      min: [0, "Price cannot be negative"],
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative"],
    },
    category: {
      typeof: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category reference is required"],
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
