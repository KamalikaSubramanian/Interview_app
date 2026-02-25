import express from "express";
import { getDoctors,postDoctors } from "../controllers/doctorController.js";


const router = express.Router();

router.get("/",getDoctors)
router.post("/",postDoctors);

export default router;