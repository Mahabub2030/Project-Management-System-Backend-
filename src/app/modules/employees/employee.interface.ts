export enum EMPLOYEE_STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  VACATION = "VACATION",
  TRANSFER = "TRANSFER",
  TERMINATED = "TERMINATED",
  FINAL_EXIT = "FINAL_EXIT",
}

export interface IEmployee {
  readonly employeeId: number; // IDs usually shouldn't change after creation
  readonly SAPNumber: string;
  name: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  gender: "male" | "female";
  workLocation: string;
  nationality: string;
  status: EMPLOYEE_STATUS;
  images?: string[];
  joiningDate: Date;
  // If you are using Mongoose timestamps, include these:
  createdAt?: Date;
  updatedAt?: Date;
}
