import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import doctorRoute from "./routes/doctorRoute.js";
import appointmentRoutes from "./routes/appointmentRoute.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const allowedOrigins = process.env.AllowedOrigins.split(",");

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null,origin);
      } else {
        console.log(" Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    credentials: true,
  })
);
app.use("/api/doctors",doctorRoute)
app.use("/api/appointments",appointmentRoutes)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Sever is running")
        })
    })
    .catch((err)=>console.log(err))

// textGET  /api/doctors          - List all doctors with availabilityPOST /api/appointments     - Book appointment (patient name, doctor ID, date)GET  /api/appointments     - List all booked appointments

// jsximport React from 'react';import axios from 'axios';import './App.css';function App() {  return (    <div className="App">      <h1>Telemedicine - Book Appointment</h1>      {/* TODO: Doctors list, booking form, appointments list */}    </div>  );}export default App;