import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient reference is required"],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "Doctor reference is required"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: [true, "Hospital reference is required"],
    },

    reason: {
      type: String,
      required: [true, "Medical visit reason is required"],
      trim: true,
      minlength: [3, "Reason must be at least 3 characters"],
    },
  },
  { timestamps: true },
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema,
);
