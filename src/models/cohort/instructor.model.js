import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    instructorName: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      default: "Engineering",
    },
    specialization: {
      type: String,
      required: true,
    },
    links: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export const Instructor = mongoose.model("Instructor", instructorSchema);
