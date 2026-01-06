import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    instructorName: {
      type: String,
      required: [true, "Instructor name is required"],
      trim: true,
      minlength: [3, "Instructor name must be at least 3 characters"],
    },
    education: {
      type: String,
      default: "Engineering",
      trim: true,
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required"],
      trim: true,
      minlength: [3, "Specialization must be at least 3 characters"],
    },
    links: {
      type: [String],
      default: [],
      validate: {
        validator: (v) => Array.isArray(v),
        message: "Links must be an array of strings",
      },
    },
  },
  { timestamps: true },
);

export const Instructor = mongoose.model("Instructor", instructorSchema);
