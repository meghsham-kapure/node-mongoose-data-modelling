import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      maxlength: [2000, "Note description cannot exceed 2000 characters"],
      select: false,
      default: "",
    },
  },
  {
    timestamps: true,
    _id: false,
  },
);

export default noteSchema;
