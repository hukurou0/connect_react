import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, MODIFY_DEPARTMENTS } from "../../../lib/constants/urls";

interface ModifyDepartmentParams {
  departmentId: number;
}

export const modifyDeparment = ({ departmentId }: ModifyDepartmentParams) => {
  axios
    .post(BASEURL + MODIFY_DEPARTMENTS, {
      data: {
        departmentId,
      },
    })
    .then((response: AxiosResponse) => {
      console.log(response);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
};