import React from 'react';
import './App.css'
import Doctor from './components/Doctor.jsx';
import BookingForm from './components/BookingForm.jsx';
import AppointmentsList from './components/AppointmentsList.jsx';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        Telemedicine - Book Appointment
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#a5cfea",
          }}
        >
          <Doctor />
        </div>

        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#a5cfea",
          }}
        >
          <BookingForm />
        </div>

        {/* Card 3 - Appointments */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#a5cfea",
          }}
        >
          <AppointmentsList />
        </div>
      </div>
    </div>
  );
}

export default App;
