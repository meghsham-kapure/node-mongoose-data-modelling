import mongoose from "mongoose";
import noteSchema from "./note.schema.js";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Todo content is required"],
      trim: true,
      minlength: [1, "Todo content cannot be empty"],
      maxlength: [1000, "Todo content cannot exceed 1000 characters"],
    },
    color: {
      type: String,
      trim: true,
      default: "yellow",
      enum: {
        values: ["YELLOW", "RED", "BLUE", "GREEN", "PURPLE"],
        message:
          "Invalid Color, Allowed Color Values ['YELLOW', 'RED', 'BLUE', 'GREEN', 'PURPLE']",
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Todo must belong to a user"],
    },

    note: {
      type: noteSchema,
    },

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubToDo",
      },
    ],
  },
  { timestamps: true },
);

export const Todo = mongoose.model("ToDo", todoSchema);
