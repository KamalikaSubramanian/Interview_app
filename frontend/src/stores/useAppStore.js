import { create } from "zustand";
import { API_BASE } from "../../config.js";
import axios from 'axios';

export const useAppStore = create((set) => ({
  doctors: [],
  appointments: [],

fetchDoctors: async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/api/doctors`);
    set({ doctors: data.data });
  } catch (err) {
    console.error("Failed to fetch doctors:", err);
  }
},

fetchAppointments: async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/api/appointments`);
    set({ appointments: data.data });
  } catch (err) {
    console.error("Failed to fetch appointments:", err);
  }
},

  bookAppointment: async (payload) => {
    return await API.post(`${API_BASE}/api/appointments`, payload);
  },
}));