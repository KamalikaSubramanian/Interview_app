import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    slot: {
      type: String,
      required: true,
    },
    bookedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);