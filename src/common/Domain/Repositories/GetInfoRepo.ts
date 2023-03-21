import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, GET_INFO } from "../../../lib/constants/urls";

export const getInfo = ( completion: (data: any) => void) => {
  axios.get(BASEURL + GET_INFO)
  .then((response: AxiosResponse) => {
    console.log(response.status);

    const data = response.data;
    completion(data);
  })
  .catch((error: AxiosError) => {
    console.log(error.message);
  });
}