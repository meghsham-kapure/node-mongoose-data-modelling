import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Category name is required"],
      default: "Uncategorizable",
      minlength: [3, "Category name must be at least 3 characters"],
    },
  },

  { timestamps: true },
);
export const Category = mongoose.model("Category", categorySchema);
