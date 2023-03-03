import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, LOGIN, SIGNUP } from "../../../../lib/constants/urls";
import { APIError } from "../../../../common/Domain/Entities/ApiBaseModel";
import { AuthResponse } from "../Entities/AuthEntity";

interface LogInParams {
  username: string,
  password: string,
  completion: (data: any) => void,
}

interface SignUpParams {
  username: string,
  password: string,
  department: number,
  completion: (data: any) => void,
}

export const logIn = ({ username, password, completion }: LogInParams) => {
  axios.post(BASEURL + LOGIN, {
    data: {
      username: username,
      password: password
    }
  })
    .then((response: AxiosResponse) => {
      console.log(response.status);

      const data = response.data;
      const logInResponse: AuthResponse = {
        status_code: data.status_code,
        data: data.data
      }
      completion(logInResponse);
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });
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