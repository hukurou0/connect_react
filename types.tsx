// Log In / Sign Up
export type AuthResponse = {
  status_code: number,
  data: AuthData,
  error?: APIError | undefined
}

export type AuthData = {
}

// Departments
export type DepartmentsResponse = {
  status_code: number,
  data: DepartmentData,
}

export type DepartmentData = {
  id: number,
  name: string,
}

export type APIError = {
  status: number,
  code: string,
  message: string
}