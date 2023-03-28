import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { loadingState } from '../Hooks/LoadingState';
import { allTasksDataState } from '../Hooks/AllTasksState';
import { fetchAllTasks } from '../Domain/Repositories/GetAllTasksRepo';

const AllTasksService = () => {
  const setAllTasks = useSetRecoilState(allTasksDataState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetAllTasks = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchAllTasks();
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    console.log(response);

    setAllTasks(response.data);
    setLoadingState(false);
  };

  return { getAndSetAllTasks };
};

export default AllTasksService;
