import { atom } from "recoil";
import { DepartmentData } from "../Domain/Entities/DepartmentEntity";

export const departmentsState = atom<DepartmentData[]>({
  key: "departmentsState",
  default: [{ id: 1, name: "知能機械" }, { id: 2, name: "情報" }],
});