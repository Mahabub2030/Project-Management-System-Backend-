import { Router } from "express";
import { ScheduleController } from "./schedule.controller";

const router = Router();

router.get("/get-schedule", ScheduleController.getAllSchedule);
router.get("/:id", ScheduleController.getSingleSchedule);

export const SchedulRoutes = router;
