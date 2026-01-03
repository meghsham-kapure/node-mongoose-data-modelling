import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Email already exists"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      required: [true, "Name is required"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
