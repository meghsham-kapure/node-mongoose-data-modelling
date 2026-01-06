import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Instructor reference is required"],
    },

    price: {
      type: Number,
      required: [true, "Batch price is required"],
      default: 10001,
      min: [0, "Batch price cannot be negative"],
    },

    startDate: {
      type: Date,
      required: [true, "Start date is required"],
      default: Date.now,
    },

    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },

    learners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Learner",
      },
    ],
  },

  { timestamps: true },
);

export const Batch = mongoose.model("Batch", batchSchema);
