import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { registeredTasks } from '../Domain/Repositories/RegisteredTasksRepo';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { registeredTasksState } from '../Hooks/RegisteredTasksState';
import { SubjectData } from '../Domain/Entities/SubjectEntity';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const RegisteredTasksService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setRegisteredTasks = useSetRecoilState(registeredTasksState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const getAndSetRegisteredTasks = async (subject: SubjectData, date: Date): Promise<void> => {
    setLoadingState(true);
    const response = await registeredTasks({
      subject_id: subject.subject_id,
      deadline_year: date.getFullYear(),
      deadline_month: date.getMonth() + 1,
      deadline_day: date.getDate(),
    });

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
    setRegisteredTasks(response.data.tasks);

    setLoadingState(false);

    if (response.data.tasks.length > 0) {
      navigate('/user/select_task', { state: { subject: subject, deadline: date } });
    } else {
      navigate('/user/create_new_task', { state: { subject: subject, deadline: date } });
    }
  };

  return { getAndSetRegisteredTasks };
};

export default RegisteredTasksService;
