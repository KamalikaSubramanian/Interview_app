import React from 'react'
import { useState, useEffect } from "react";
import { useAppStore } from "../stores/useAppStore.js";

function Doctor() {
    const { doctors, fetchDoctors } = useAppStore();
    useEffect(() => {
        fetchDoctors();
    }, [])
    return (
        <div>
            <h2>Doctors</h2>
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
    )
}

export default Doctor
