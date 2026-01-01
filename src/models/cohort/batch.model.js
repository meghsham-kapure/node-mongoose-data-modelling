import mongoose from "mongoose";

const batchSchema = new mongoose.Schema(
  {
    // one batch one Instructor
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 10001,
    },

    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    endDate: {
      type: Date,
      required: true,
      default: function () {
        const start = this.startDate || new Date();
        return new Date(start.setMonth(start.getMonth() + 3));
      },
    },

    // one batch many Learner
    learners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Learner",
      },
    ],
  },

  { timestamps: true }
);

export const Batch = mongoose.model("Batch", batchSchema);
