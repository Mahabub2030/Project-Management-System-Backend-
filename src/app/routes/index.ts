import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";

import { EmployeeRoutes } from "../modules/employees/employee.route";
import otpRoute from "../modules/otp/otp.route";
import { SchedulRoutes } from "../modules/Schedule/schedule.route";
import { UserRoutes } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },

  {
    path: "/employees",
    route: EmployeeRoutes,
  },
  {
    path: "/schedules",
    route: SchedulRoutes,
  },
  {
    path: "/otp",
    route: otpRoute,
  },

  // {
  //     path: "/tour",
  //     route: TourRoutes
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
