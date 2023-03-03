import { atom } from "recoil";
import { DepartmentData } from "../Domain/Entities/DepartmentEntity";

export const departmentsState = atom<DepartmentData[]>({
  key: "departmentsState",
  default: [],
});