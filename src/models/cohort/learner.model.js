import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema(
  {
    learnerName: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      default: "student",
    },
    isEnrolled: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

export const Learner = mongoose.model("Learner", learnerSchema);
