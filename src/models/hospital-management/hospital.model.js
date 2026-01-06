import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hospital name is required"],
      trim: true,
      minlength: [3, "Hospital name must be at least 3 characters"],
    },

    address: {
      addressLine1: {
        type: String,
        required: [true, "Address line 1 is required"],
        lowercase: true,
        trim: true,
      },
      addressLine2: {
        type: String,
        lowercase: true,
        trim: true,
      },
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },

    pincode: {
      type: String,
      required: [true, "Pincode is required"],
      trim: true,
    },

    specialization: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true },
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
