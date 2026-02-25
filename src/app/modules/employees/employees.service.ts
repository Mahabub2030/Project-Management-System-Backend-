import { QueryBuilder } from "../../utils/QueryBuilder";
import { ShiftSchedule } from "../Schedule/Schedule.model";

import { employeeSearchableFields } from "./employee.constant";
import { IEmployee } from "./employee.interface";
import { Employee } from "./employee.model";

const createEmployee = async (payload: IEmployee) => {
  const existingEmployees = await Employee.findOne({
    employeeId: payload.employeeId,
  });

  if (existingEmployees) {
    throw new Error("This employee already exists");
  }
  const employee = await Employee.create(payload);

  await ShiftSchedule.create({
    employeeId: employee.employeeId,
    SAPNumber: employee.SAPNumber,
    shiftType: "A", // Defaulting to Shift A
    date: new Date(), // Setting today as the start date
    startTime: new Date().setHours(6, 0, 0, 0), // Default 06:00 AM
    endTime: new Date().setHours(14, 0, 0, 0), // Default 02:00 PM
    notes: "Default shift assigned upon account creation.",
  });

  return employee;
};

const getAllEmployeeData = async (query: Record<string, string>) => {
  const queryBuilder = new QueryBuilder(Employee.find(), query);
  const employees = queryBuilder
    .search(employeeSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate();
  const [data, meta] = await Promise.all([
    employees.build(),
    queryBuilder.getMeta(),
  ]);

  return {
    data,
    meta,
  };
};

const getSingaleEmployee = async (id: string) => {
  const employee = await Employee.findById(id);
  return {
    data: employee,
  };
};

const updatedEmployees = async (id: string, payload: Partial<IEmployee>) => {
  const existingEmployees = await Employee.findById(id);

  if (!existingEmployees) {
    throw new Error("employee Not found");
  }

  const updatedEmployees = await Employee.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updatedEmployees;
};
const deletedEmployees = async (id: string) => {
  await Employee.findByIdAndDelete(id);
  return null;
};

export const EmployeeService = {
  createEmployee,
  getAllEmployeeData,
  getSingaleEmployee,
  updatedEmployees,
  deletedEmployees,
};
function paginate() {
  throw new Error("Function not implemented.");
}
