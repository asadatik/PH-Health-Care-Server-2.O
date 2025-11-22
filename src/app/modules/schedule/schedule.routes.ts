import express from "express";
import { ScheduleController } from "./schedule.controller";

const router = express.Router();

router.get("/", ScheduleController.scheduleForDoctors);

router.post("/", ScheduleController.insertIntoDB);

export const scheduleRoutes = router;
