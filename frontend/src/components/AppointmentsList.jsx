import React, { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore.js";

function AppointmentsList() {
  const { appointments, fetchAppointments } = useAppStore();

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>

      {appointments.length === 0 && <p>No appointments booked</p>}

      {appointments.map((appointment) => (
        <div key={appointment._id}>
          <p><strong>Patient:</strong> {appointment.patientName}</p>
          <p><strong>Doctor:</strong> {appointment.doctorId?.name}</p>
          <p><strong>Slot:</strong> {appointment.slot}</p>
          <p>
            <strong>Booked At:</strong>{" "}
            {new Date(appointment.bookedAt).toLocaleString()}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AppointmentsList;