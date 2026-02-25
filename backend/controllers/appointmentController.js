import { Appointment } from "../models/appointmentModel.js";
import { Doctor } from "../models/doctorModel.js";

export const getAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.find({})
      .populate("doctorId");

    return res.status(200).json({
      success: true,
      message: "Appointments fetched successfully",
      data: appointments,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
    });
  }
};

export const postAppointment = async (req, res) => {
  try {
    const { patientName, doctorId, slot } = req.body;

    if (!patientName || !doctorId || !slot) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    if (!doctor.availableSlots.includes(slot)) {
      return res.status(400).json({
        success: false,
        message: "Slot not available",
      });
    }

    const existingAppointment = await Appointment.findOne({
      doctorId,
      slot,
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
      });
    }

    const newAppointment = await Appointment.create({
      patientName,
      doctorId,
      slot,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: newAppointment,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Booking failed",
    });
  }
};