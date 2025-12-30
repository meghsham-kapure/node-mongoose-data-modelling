import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Name is required"],
    },
    color: {
      type: String,
      required: [true, "Name is required"],
      default: "yellow",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subToDo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SUbToDO",
      },
    ], // Arrays  of Sub-To-Do-es
  },

  { timestamps: true }
);

export const Todo = mongoose.model("ToDo", todoSchema);
