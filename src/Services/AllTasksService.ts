import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { allTasksDataState } from '../Hooks/AllTasksState';
import { fetchAllTasks } from '../Domain/Repositories/GetAllTasksRepo';
import { logInState } from '../Hooks/LogInState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const AllTasksService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setAllTasks = useSetRecoilState(allTasksDataState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const getAndSetAllTasks = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchAllTasks();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${customError.message} (c_${customError.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${response.error.message} (${response.error.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    console.log(response);

    setAllTasks(response.data);
    setLoadingState(false);
  };

  return { getAndSetAllTasks };
};

export default AllTasksService;
