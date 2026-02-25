import { Document } from "mongoose";

// Define the Shift Types as an Enum
export enum SHIFT_TYPE {
  SHIFT_A = "A",
  SHIFT_B = "B",
  SHIFT_C = "C",
}

export interface IShift extends Document {
  employeeId: number; // Linked to your Employee Interface
  SAPNumber: string;
  shiftType: SHIFT_TYPE;
  date: Date; // The specific workday
  startTime: Date;
  endTime: Date;
  status: string; // To track if they are ACTIVE/VACATION at time of shift
  notes?: string;
}
