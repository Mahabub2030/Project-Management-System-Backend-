import { QueryBuilder } from "../../utils/QueryBuilder";
import { scheduleSearchableFields } from "./schedule..constant";
import { ShiftSchedule } from "./Schedule.model";

const getAllSchedule = async (query: Record<string, string>) => {
  const queryBuilder = new QueryBuilder(ShiftSchedule.find(), query);

  const schedule = queryBuilder
    .search(scheduleSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate();
  const [data, meta] = await Promise.all([
    schedule.build(),
    queryBuilder.getMeta(),
  ]);
  return {
    data,
    meta,
  };
};

const getSingleSchdule = async (id: string) => {
  const schedule = await ShiftSchedule.findById({ _id: id });
  return {
    data: schedule,
  };
};

const updateSchdule = async () => {};
const deleteSchdule = async () => {};

export const scheduleServices = {
  getAllSchedule,
  getSingleSchdule,
  updateSchdule,
  deleteSchdule,
};
