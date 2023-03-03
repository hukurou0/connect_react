import axios from "axios";
import { BASEURL, LOGIN } from "../constants/urls";
import { AuthResponse } from "../../types";

interface LogInParams {
  username: string,
  password: string,
  completion: (data: any) => void,
}

export const logIn = ({username, password, completion}: LogInParams) => {
  axios.post(BASEURL + LOGIN, {
    data: {
      username: username,
      password: password
    }
  })
    .then(response => {
      console.log(response.status);

      const data = response.data;
      const logInResponse: AuthResponse = {
        status_code: data.status_code,
        data: data.data
      }
      completion(logInResponse);
    })
    .catch(error => {
      console.log(error);
    });
}