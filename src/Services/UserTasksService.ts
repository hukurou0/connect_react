import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { userTasksState } from '../Hooks/UserTasksState';
import { deleteUserTask, fetchUserTasks } from '../Domain/Repositories/UserTasksRepo';
import { TaskData } from '../Domain/Entities/TaskEntity';
import { logInState } from '../Hooks/LogInState';

const UserTasksService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setUserTasks = useSetRecoilState(userTasksState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetUserTasks = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserTasks();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
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
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    await getAndSetUserTasks();
    setLoadingState(false);
  };

  return { getAndSetUserTasks, deleteTask };
};

export default UserTasksService;
