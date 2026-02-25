import express from "express";
import { getAppointment,postAppointment } from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/",getAppointment);
router.post("/",postAppointment);

export default router;