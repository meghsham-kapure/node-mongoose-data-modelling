import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exists"],
      lowercase: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [6, "Password must be at least 6 characters"],
    },
  },

  { timestamps: true },
);
export const User = mongoose.model("User", userSchema);
