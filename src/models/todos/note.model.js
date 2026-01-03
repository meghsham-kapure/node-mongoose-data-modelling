import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
      select: false,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

export default noteSchema;
