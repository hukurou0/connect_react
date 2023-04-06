import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { userTasksState } from '../Hooks/UserTasksState';
import { deleteUserTask, fetchUserTasks } from '../Domain/Repositories/UserTasksRepo';
import { TaskData } from '../Domain/Entities/TaskEntity';
import { logInState } from '../Hooks/LogInState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';
import { alertContentState } from '../Hooks/AlertContentState';

const UserTasksService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setUserTasks = useSetRecoilState(userTasksState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const getAndSetUserTasks = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserTasks();
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
    setUserTasks(response.data.tasks);
    setLoadingState(false);
  };

  const deleteTask = async (task: TaskData): Promise<void> => {
    setLoadingState(true);
    const response = await deleteUserTask(task);
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の削除に失敗しました。\n${customError.message} (c_${customError.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の削除に失敗しました。\n${response.error.message} (${response.error.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    await getAndSetUserTasks();
    setLoadingState(false);
  };

  return { getAndSetUserTasks, deleteTask };
};

export default UserTasksService;
