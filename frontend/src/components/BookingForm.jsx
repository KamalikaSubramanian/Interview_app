import React, { useState } from "react";
import { useAppStore } from "../stores/useAppStore.js";

function BookingForm() {
  const { doctors, bookAppointment, fetchAppointments } = useAppStore();

  const [patientName, setPatientName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const selectedDoctorData = doctors.find(
    (doc) => doc._id === selectedDoctor
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientName || !selectedDoctor || !selectedSlot) {
      alert("Please fill all fields");
      return;
    }

    try {
      await bookAppointment({
        patientName,
        doctorId: selectedDoctor,
        slot: selectedSlot,
      });

      alert("Appointment Booked Successfully");

      await fetchAppointments();

      setPatientName("");
      setSelectedDoctor("");
      setSelectedSlot("");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <br /><br />

        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name}
            </option>
          ))}
        </select>

        <br /><br />

        {selectedDoctorData && (
          <>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
            >
              <option value="">Select Slot</option>
              {selectedDoctorData.availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <br /><br />
          </>
        )}

        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;