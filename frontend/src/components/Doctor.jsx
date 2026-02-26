import React, { useEffect } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { useAppStore } from "../stores/useAppStore.js";

function Doctor() {
    const { doctors, fetchDoctors } = useAppStore();

    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors]);

    return (
        <div>
            <h2 style={{ color: "#0c4a6e" }}>
                <FaUserDoctor /> Doctors
            </h2>

            {doctors.length === 0 && <p>No doctors available</p>}

            {doctors.map((doc) => (
                <div key={doc._id}>
                    <p><strong>{doc.name}</strong></p>
                    <p>Specialty: {doc.specialty}</p>
                    <p>Available Slots: {doc.availableSlots.join(", ")}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Doctor;