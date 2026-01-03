import mongoose from "mongoose";
import noteSchema from "./note.schema.js";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Todo must have content"],
      trim: true,
    },
    color: {
      type: String,
      default: "yellow",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    note: {
      type: noteSchema,
    },

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubToDo",
      },
    ], // Array of Sub-To-Do-es
  },
  { timestamps: true }
);

export const Todo = mongoose.model("ToDo", todoSchema);
