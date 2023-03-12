import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, GET_SUBJECTS } from "../../../lib/constants/urls";
import { SubjectData } from "../Entities/SubjectEntity";

export const fetchSubject = (completion: (data: SubjectData[]) => void) => {
  axios.get(BASEURL + GET_SUBJECTS)
    .then((response: AxiosResponse) => {
      console.log(response);
      completion(response.data.data);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
}