export type DepartmentsResponse = {
  status_code: number,
  data: DepartmentData[],
}

export type DepartmentData = {
  id: number,
  name: string,
}