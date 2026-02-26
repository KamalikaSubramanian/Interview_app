import React from 'react';
import './App.css'
import { FaHospitalUser } from "react-icons/fa6";
import Doctor from './components/Doctor.jsx';
import BookingForm from './components/BookingForm.jsx';
import AppointmentsList from './components/AppointmentsList.jsx';

function App() {

  const cardStyle = {
    flex: 1,
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#a5cfea",
    height: "500px",
    overflow: "auto",
    color: "#1e293b"   // ✅ Dark readable text
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#0c4a6e" }}>
        <FaHospitalUser /> Telemedicine - Book Appointment
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div style={cardStyle}>
          <Doctor />
        </div>

        <div style={cardStyle}>
          <BookingForm />
        </div>

        <div style={cardStyle}>
          <AppointmentsList />
        </div>
      </div>
    </div>
  );
}

export default App;