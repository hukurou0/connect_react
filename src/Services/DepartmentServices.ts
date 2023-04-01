import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { departmentsState } from '../Hooks/DepartmentsState';
import { fetchDepartments, modifyDeparment } from '../Domain/Repositories/DepartmentRepo';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';

const DepartmentService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setDepartments = useSetRecoilState(departmentsState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetDepartments = async (): Promise<void> => {
    // setLoadingState(true);
    const response = await fetchDepartments();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setDepartments(response.data);
    setLoadingState(false);
  };

  const updateDepartment = async (departmentId: number) => {
    // setLoadingState(true);
    const response = await modifyDeparment(departmentId);
    if (response.error !== undefined) {
      console.log(response.error);
    }
    setLoadingState(false);
  };

  return { getAndSetDepartments, updateDepartment };
};

export default DepartmentService;
