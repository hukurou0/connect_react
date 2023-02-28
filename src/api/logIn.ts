import axios from "axios";
import { BASEURL, LOGIN } from "../constants/urls";
import { LogInResponse } from "../../types";

export const logIn = (completion: (data: any) => void) => {
  axios.post(BASEURL + LOGIN, {
    data: {
      username: "aaaa",
      password: "aaaa"
    }
  })
    .then(response => {
      console.log(response.status);

      const data = response.data;
      const logInResponse: LogInResponse = {
        status_code: data.status_code,
        data: data.data
      }
      completion(logInResponse);
    })
    .catch(error => {
      console.log(error);
    });
}