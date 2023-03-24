import axios from 'axios';
import { BASEURL, GET_DEPARTMENTS, MODIFY_DEPARTMENTS } from '../../lib/constants/urls';
import { DepartmentsResponse } from '../Entities/DepartmentEntity';
import { makeErrorData } from '../../lib/helpers/errorHandler';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';

export const fetchDepartments = async (): Promise<DepartmentsResponse> => {
  try {
    const response = await axios.get(BASEURL + GET_DEPARTMENTS);
    const { data } = response;
    const departmentsResponse: DepartmentsResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return departmentsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const departmentsResponse: DepartmentsResponse = {
      status_code: 0,
      data: [],
      error: errorData,
    };
    return departmentsResponse;
  }
};

export const modifyDeparment = async (departmentId: number): Promise<EmptyResponse> => {
  try {
    const response = await axios.post(BASEURL + MODIFY_DEPARTMENTS, {
      data: {
        department_id: departmentId,
      },
    });

    const { data } = response.data;

    const emptyResponse: EmptyResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return emptyResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const emptyResponse: EmptyResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return emptyResponse;
  }
};
