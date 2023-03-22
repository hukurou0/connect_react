import { DepartmentData } from "../../common/Domain/Entities/DepartmentEntity";

export const getDepartment = (departmentName: string | undefined, departments: DepartmentData[]) => {
  if (departmentName === undefined) return undefined;
  
  for(let i = 0; i < departments.length; i+=1) {
    if(departments[i].name === departmentName) return departments[i];
  }
  return undefined;
}