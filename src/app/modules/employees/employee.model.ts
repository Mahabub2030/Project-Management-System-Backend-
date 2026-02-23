import { model, Schema } from "mongoose";
import { EMPLOYEE_STATUS, IEmployee } from "./employee.interface";

const employeeSchema = new Schema<IEmployee>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    employeeId: {
      type: Number,
      unique: true,
      required: true,
    },
    SAPNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    jobTitle: { type: String },
    workLocation: { type: String },
    nationality: { type: String },
    status: {
      type: String,
      enum: Object.values(EMPLOYEE_STATUS),
      default: EMPLOYEE_STATUS.ACTIVE,
    },
    images: {
      type: [String],
      default: [],
    },
    joiningDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Optional: Add an index for faster searching on common fields
employeeSchema.index({ name: "text", jobTitle: "text" });

export const Employee = model<IEmployee>("Employee", employeeSchema);
