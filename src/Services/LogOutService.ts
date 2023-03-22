import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { logout } from '../Domain/Repositories/LogOutRepo';
import { subjectsState } from '../Hooks/SubjectState';
import { userDataState } from '../Hooks/UserDataState';
import { logInState } from '../Hooks/LogInState';

const LogOutService = () => {
  const navigate = useNavigate();
  const resetSubjects = useResetRecoilState(subjectsState);
  const resetUserData = useResetRecoilState(userDataState);
  const setLogInState = useSetRecoilState(logInState);

  const logOut = async (): Promise<void> => {
    await logout();
    // Whatever erro happen, reset all data and going back to login.
    // if (response.error !== undefined) {
    //   console.log(response.error);
    //   return;
    // }
    resetSubjects();
    resetUserData();
    setLogInState(false);
    navigate('/login');
  };

  return { logOut };
};

export default LogOutService;
