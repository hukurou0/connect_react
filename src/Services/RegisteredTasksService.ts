import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { registeredTasks } from '../Domain/Repositories/RegisteredTasksRepo';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { registeredTasksState } from '../Hooks/RegisteredTasksState';
import { SubjectData } from '../Domain/Entities/SubjectEntity';
import { loadingState } from '../Hooks/LoadingState';

const RegisteredTasksService = () => {
  const setRegisteredTasks = useSetRecoilState(registeredTasksState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetRegisteredTasks = async (subject: SubjectData, date: Date): Promise<void> => {
    setLoadingState(true);
    const response = await registeredTasks({
      subject_id: subject.subject_id,
      deadline_year: date.getFullYear(),
      deadline_month: date.getMonth() + 1,
      deadline_day: date.getDate(),
    });
    console.log(response);

    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setRegisteredTasks(response.data.tasks);

    setLoadingState(false);
    console.log(response.data.tasks);
    
    if (response.data.tasks.length > 0) {
      navigate('/user/select_task', { state: { subject: subject, deadline: date } });
    } else {
      navigate('/user/create_new_task', { state: { subject: subject, deadline: date } });
    }
  };

  return { getAndSetRegisteredTasks };
};

export default RegisteredTasksService;
