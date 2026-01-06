import mongoose from "mongoose";

const cohortSchema = new mongoose.Schema(
  {
    cohortName: {
      type: String,
      required: [true, "Cohort name is required"],
      trim: true,
      minlength: [3, "Cohort name must be at least 3 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: {
        values: ["ACTIVE", "INACTIVE", "COMPLETED", "UPCOMING"],
        message:
          "Invalid Status, Allowed Status Values ['ACTIVE', 'INACTIVE', 'COMPLETED', 'UPCOMING']",
      },
      lowercase: true,
      default: "upcoming",
      required: [true, "Cohort status is required"],
      trim: true,
    },
    batches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
      },
    ],
  },
  { timestamps: true },
);

export const Cohort = mongoose.model("Cohort", cohortSchema);
