import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { subjectsState } from '../Hooks/SubjectState';
import { userDataState } from '../Hooks/UserDataState';
import { logInState } from '../Hooks/LogInState';
import { loadingState } from '../Hooks/LoadingState';
import { allTasksDataState } from '../Hooks/AllTasksState';
import { registeredTasksState } from '../Hooks/RegisteredTasksState';
import { userTasksState } from '../Hooks/UserTasksState';

const LogOutService = () => {
  const navigate = useNavigate();
  const resetSubjects = useResetRecoilState(subjectsState);
  const resetUserData = useResetRecoilState(userDataState);
  const resetAllTasksData = useResetRecoilState(allTasksDataState);
  const resetRegisteredTasksData = useResetRecoilState(registeredTasksState);
  const resetSubjectsData = useResetRecoilState(subjectsState);
  const resetUserTasksData = useResetRecoilState(userTasksState);
  const setLogInState = useSetRecoilState(logInState);
  const setLoadingState = useSetRecoilState(loadingState);

  const logOut = async (): Promise<void> => {
    setLoadingState(true);
    sessionStorage.removeItem('user_id');
    resetSubjects();
    resetUserData();
    resetAllTasksData();
    resetRegisteredTasksData();
    resetSubjectsData();
    resetUserTasksData();
    setLogInState(false);
    setLoadingState(false);
    navigate('/login');
  };

  return { logOut };
};

export default LogOutService;
