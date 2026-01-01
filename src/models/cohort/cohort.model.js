import mongoose from "mongoose";

const cohortSchema = new mongoose.Schema(
  {
    cohortName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "completed", "upcoming"],
      default: "upcoming",
      required: true,
    },
    // one cohort many bathces
    batches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
      },
    ],
  },
  { timestamps: true }
);

export const Cohort = mongoose.model("Cohort", cohortSchema);
