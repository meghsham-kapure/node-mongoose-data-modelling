import mongoose from "mongoose";

const DoctorsTimeInHospital = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: [true, "Hospital reference is required"],
  },
  hospitalTime: [
    {
      day: {
        type: String,
        required: [true, "Working day is required"],
        enum: {
          values: ["MORNING", "EVENING", "AFTERNOON", "FULLDAY"],
          message:
            "Invalid Timing, Allowed Timing Values ['MORNING', 'EVENING', 'AFTERNOON', 'FULLDAY']",
        },

        uppercase: true,
        trim: true,
      },
      timing: {
        type: String,
        required: [true, "Timing is required"],
        enum: {
          values: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
          message:
            "Invalid Day, Allowed Day Values ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']",
        },

        uppercase: true,
        trim: true,
      },
    },
  ],
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Doctor name is required"],
      trim: true,
      minlength: [3, "Doctor name must be at least 3 characters"],
    },

    salary: {
      type: Number,
      required: [true, "Doctor salary is required"],
      min: [0, "Salary cannot be negative"],
    },

    qualification: {
      type: String,
      required: [true, "Doctor qualification is required"],
      trim: true,
      minlength: [2, "Qualification must be at least 2 characters"],
    },

    experienceInYears: {
      type: Number,
      required: [true, "Experience in years is required"],
      default: 0,
      min: [0, "Experience cannot be negative"],
    },

    worksInHospitals: [DoctorsTimeInHospital],
  },
  { timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
