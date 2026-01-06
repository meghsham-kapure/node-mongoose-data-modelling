import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
      minlength: [3, "Patient name must be at least 3 characters"],
    },

    diagonsedWith: {
      type: String,
      required: [true, "Diagnosis is required"],
      trim: true,
    },

    address: {
      firstLine: {
        type: String,
        required: [true, "Address first line is required"],
        trim: true,
      },
      secondLine: {
        trim: true,
        type: String,
      },
    },

    age: {
      type: Number,
      required: [true, "Patient age is required"],
      min: [0, "Age cannot be negative"],
      max: [130, "Age cannot be greater than 130"],
    },

    bloodgroup: {
      type: String,
      required: [true, "Blood group is required"],
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message:
          "Invalid Bloodgroup, Allowed Bloodgroup Values ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']",
      },
      uppercase: true,
      trim: true,
    },

    gender: {
      type: String,
      trim: true,
      enum: {
        values: ["MALE", "FEMALE", "OTHER"],
        message:
          "Invalid Gender, Allowed Gender Values ['MALE', 'FEMALE', 'OTHER']",
      },
      uppercase: true,
      required: [true, "Gender is required"],
    },

    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true },
);

export const Patient = mongoose.model("Patient", patientSchema);
