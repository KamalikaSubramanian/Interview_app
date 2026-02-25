import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        specialty: {
            type: String,
            required: true,
        },
        availableSlots: [
            {
                type: String,
                enum: ["First", "Second", "Third"],
            },
        ]
    },{ timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema)