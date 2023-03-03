import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, LOGIN, SIGNUP } from "../constants/urls";
import { AuthResponse, APIError } from "../../types";

interface SignUpParams {
  username: string,
  password: string,
  department: number,
  completion: (data: any) => void,
}

export const signUp = ({ username, password, department, completion }: SignUpParams) => {

  axios.post(BASEURL + SIGNUP, {
    data: {
      username: username,
      password: password,
      department: department
    }
  })
    .then((response: AxiosResponse) => {
      console.log(response.status);

      const data = response.data;
      const authResponse: AuthResponse = {
        status_code: data.status_code,
        data: data.data
      }
      completion(authResponse);
    })
    .catch((error: AxiosError) => {
      const errorData: APIError = {
        status: error.response?.status ?? 0,
        code: error.code ?? "",
        message: error.message
      }

      const authResponse: AuthResponse = {
        status_code: error.response?.status ?? 0,
        data: {},
        error: errorData
      }
      completion(authResponse);

      console.log(error);
    });
}