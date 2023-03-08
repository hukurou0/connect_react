import { APIError } from "../../../../common/Domain/Entities/ApiBaseModel"

export type DepartmentsResponse = {
  status_code: number,
  data: DepartmentData[],
  error?: APIError | undefined
}

export type DepartmentData = {
  id: number,
  name: string,
}