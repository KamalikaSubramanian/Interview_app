import { Doctor } from "../models/doctorModel.js"


export const getDoctors = async (req, res) => {
    try{
        const doctors = await Doctor.find({});
        return res.status(200).json({success:true,message:"Doctors list are fetched",data:doctors})
    }
    catch(err){
        console.log("Doctors data not fetched");
        return res.status(500).json({success:false,message:"Doctors list are not fetched"})
    }
}

export const postDoctors = async (req, res) => {
    try{
        const {name,specialty, availableSlots} = req.body;
        if(!name|| ! specialty || ! availableSlots){
            return res.status(400).json({message:"Please provide all fields"})
        }

        const newDoctor = await Doctor({name,specialty, availableSlots})
        await newDoctor.save();
        return res.status(201).json({success:true,message:"Doctor created successfully"})
    }
    catch(err){
        console.log("Doctors are not created",err);
        return res.status(500).json({success:false,message:"Doctor not created"})
    }
}

