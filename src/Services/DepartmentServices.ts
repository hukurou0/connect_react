import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { departmentsState } from '../Hooks/DepartmentsState';
import { fetchDepartments, modifyDeparment } from '../Domain/Repositories/DepartmentRepo';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const DepartmentService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setDepartments = useSetRecoilState(departmentsState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const getAndSetDepartments = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchDepartments();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `学科一覧の取得に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `学科一覧の取得に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setDepartments(response.data);
    setLoadingState(false);
  };

  const updateDepartment = async (departmentId: number) => {
    setLoadingState(true);
    const response = await modifyDeparment(departmentId);
    
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `学科の変更に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `学科の変更に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setLoadingState(false);
  };

  return { getAndSetDepartments, updateDepartment };
};

export default DepartmentService;
