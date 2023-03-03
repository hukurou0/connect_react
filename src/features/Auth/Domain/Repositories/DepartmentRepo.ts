import axios, { AxiosError, AxiosResponse } from "axios";
import { BASEURL, GET_DEPARTMENTS } from "../../../../lib/constants/urls";
import { DepartmentData } from "../Entities/DepartmentEntity";

export const fetchDepartments = (completion: (data: DepartmentData[]) => void) => {
  axios.get(BASEURL + GET_DEPARTMENTS)
    .then((response: AxiosResponse) => {
      console.log(response);
    })
    .catch((error: AxiosError) => {
      console.log("ERROR");
      
      console.log(error);
    });
}