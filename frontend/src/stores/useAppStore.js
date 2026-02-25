import { create } from "zustand";
import API from "../api/axios";

export const useAppStore = create((set) => ({
  doctors: [],
  appointments: [],

  fetchDoctors: async () => {
    const { data } = await API.get("/doctors");
    set({ doctors: data.data });
  },

  fetchAppointments: async () => {
    const { data } = await API.get("/appointments");
    set({ appointments: data.data });
  },

  bookAppointment: async (payload) => {
    return await API.post("/appointments", payload);
  },
}));