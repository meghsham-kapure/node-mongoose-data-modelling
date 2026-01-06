import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema(
  {
    learnerName: {
      type: String,
      required: [true, "Learner name is required"],
      trim: true,
      minlength: [3, "Learner name must be at least 3 characters"],
    },
    occupation: {
      type: String,
      trim: true,
      default: "student",
    },
    isEnrolled: {
      type: Boolean,
      required: [true, "Enrollment status is required"],
      default: true,
    },
  },
  { timestamps: true },
);

export const Learner = mongoose.model("Learner", learnerSchema);
