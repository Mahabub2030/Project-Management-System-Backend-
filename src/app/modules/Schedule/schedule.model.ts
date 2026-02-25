import { model, Schema } from "mongoose";
import { IShift, SHIFT_TYPE } from "./schedule.interface";

const Schedule: Schema = new Schema(
  {
    employeeId: {
      type: Number,
      required: true,
      index: true, // Indexed for faster searching by ID
    },
    SAPNumber: {
      type: String,
      required: true,
    },
    shiftType: {
      type: String,
      enum: Object.values(SHIFT_TYPE),
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

// 4. Export the Model
export const ShiftSchedule = model<IShift>("ShiftSchedule", Schedule);
