import mongoose from "mongoose";

const subToDoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      required: [true, "SubTodo content is required"],
      maxlength: [500, "SubTodo content cannot exceed 500 characters"],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "SubTodo must belong to a user"],
    },
  },
  { timestamps: true },
);

export const SubTodo = mongoose.model("SubToDo", subToDoSchema);
