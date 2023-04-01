import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { subjectsState } from '../Hooks/SubjectState';
import { userDataState } from '../Hooks/UserDataState';
import { logInState } from '../Hooks/LogInState';
import { loadingState } from '../Hooks/LoadingState';

const LogOutService = () => {
  const navigate = useNavigate();
  const resetSubjects = useResetRecoilState(subjectsState);
  const resetUserData = useResetRecoilState(userDataState);
  const setLogInState = useSetRecoilState(logInState);
  const setLoadingState = useSetRecoilState(loadingState);

  const logOut = async (): Promise<void> => {
    setLoadingState(true);
    sessionStorage.removeItem('user_id');
    // Whatever error happen, reset all data and going back to login.
    // if (response.error !== undefined) {
    //   console.log(response.error);
    //   return;
    // }
    resetSubjects();
    resetUserData();
    setLogInState(false);
    setLoadingState(false);
    navigate('/login');
  };

  return { logOut };
};

export default LogOutService;
