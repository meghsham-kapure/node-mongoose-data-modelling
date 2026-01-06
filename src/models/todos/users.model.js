import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    lowercase: true,
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [30, "Username must be less than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: [true, "Email already exists"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  timestamps: true,
});

export const User = mongoose.model("User", userSchema);
