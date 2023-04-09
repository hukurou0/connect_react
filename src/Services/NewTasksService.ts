import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { duplicateTask, newTask } from '../Domain/Repositories/NewTasksRepo';
import { loadingState } from '../Hooks/LoadingState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { logInState } from '../Hooks/LogInState';

const NewTasksService = () => {
  const navigate = useNavigate();
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const newduplicateTask = async (taskId: number) => {
    setLoadingState(true);
    const response = await duplicateTask(taskId);
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setLoadingState(false);
  };

  const newaddTask = async (
    subject_id: number,
    subject_name: string,
    task_id: number,
    deadline_year: number,
    deadline_month: number,
    deadline_day: number,
    summary: string,
    details: string,
    difficulty: number
  ) => {
    setLoadingState(true);
    const response = await newTask(
      subject_id,
      subject_name,
      task_id,
      deadline_year,
      deadline_month,
      deadline_day,
      summary,
      details,
      difficulty
    );
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `課題の取得に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setLoadingState(false);
  };

  return { newduplicateTask, newaddTask };
};

export default NewTasksService;
