import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, GET_USERIFNO } from "../../../lib/constants/urls";
import { UserData } from "../Entities/UserDataEntity";

export const fetchUserData = (completion: (data: UserData) => void) => {
  axios
    .get(BASEURL + GET_USERIFNO)
    .then((response: AxiosResponse) => {
      console.log(response);
      completion(response.data.data);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
};