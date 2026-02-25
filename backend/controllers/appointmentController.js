import { Appointment } from "../models/appointmentModel.js"
import { Doctor } from "../models/doctorModel.js";


export const getAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.find({}).populate("doctorId");
        return res.status(200).json({ success: true, message: "Appointments fetched successfully", data: appointments })
    }
    catch (err) {
        console.log("Appointments data are not fetched");
        return res.status(500).json({ success: false, message: "Appointments data are not fetched" })
    }
}

export const postAppointment = async (req, res) => {
    try {
        const { patientName, doctorId, slot } = req.body;
        if (!patientName || !doctorId || !slot) {
            return res.json({ message: 'Please provide all the fields' })
        }
        const doctor = await Doctor.findById( doctorId );
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" })
        };
        if (!doctor.availableSlots.includes(slot)) {
            return res.status(400).json({
                success: false,
                message: "Slot not available for this doctor",
            });
        }

        const existingAppointment = await Appointment.findOne({ doctorId, slot });

        if (existingAppointment) {
            return res.status(400).json({
                success: false,
                message: "Slot already booked",
            });
        }

        const newAppointment = new Appointment({ patientName, doctorId, slot });

        await newAppointment.save();

        return res.status(201).json({ success: true, message: "Booked appointment", "appointment": newAppointment })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Appointment not booked." })
    }

}

