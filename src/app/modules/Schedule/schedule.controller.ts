import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { scheduleServices } from "./schedule.service";

const getAllSchedule = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await scheduleServices.getAllSchedule(
    query as Record<string, string>,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All Schedule Get successfully",
    meta: result.meta,
    data: result.data,
  });
});
const getSingleSchedule = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await scheduleServices.getSingleSchdule(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single Schedule Get successfully",
    data: result.data,
  });
});

export const ScheduleController = { getAllSchedule, getSingleSchedule };
