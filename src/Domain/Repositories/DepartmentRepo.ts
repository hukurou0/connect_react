import axios from 'axios';
import { BASEURL, GET_DEPARTMENTS, MODIFY_DEPARTMENTS } from '../../lib/constants/urls';
import { DepartmentsResponse } from '../Entities/DepartmentEntity';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';

export const fetchDepartments = async (): Promise<DepartmentsResponse> => {
  const { makeErrorData } = ErrorHandler();
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
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + MODIFY_DEPARTMENTS, {
      user_id: sessionStorage.getItem('user_id'),
      data: {
        department_id: departmentId,
      },
    });
    
    const emptyResponse: EmptyResponse = {
      status_code: response.data.status_code,
      data: response.data.data,
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
