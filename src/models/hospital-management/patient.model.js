import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagonsedWith: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    bloodgroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Non-binary", "Other"],
      required: true,
    },

    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
