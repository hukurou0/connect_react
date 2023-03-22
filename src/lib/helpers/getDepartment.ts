import { DepartmentData } from '../../Domain/Entities/DepartmentEntity';

export const getDepartment = (deartmentId: number | undefined, departments: DepartmentData[]) => {
  if (deartmentId === undefined) return undefined;

  for (let i = 0; i < departments.length; i += 1) {
    if (departments[i].id === deartmentId) return departments[i];
  }
  return undefined;
};
