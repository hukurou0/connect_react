import { APIError } from "./ApiBaseModel"

export type DepartmentsResponse = {
  status_code: number,
  data: DepartmentData[],
  error?: APIError | undefined
}

export type DepartmentData = {
  id: number,
  name: string,
}