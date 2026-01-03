import mongoose from "mongoose";

const subToDoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubToDo", subToDoSchema);
