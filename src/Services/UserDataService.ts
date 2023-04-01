import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loadingState } from '../Hooks/LoadingState';
import { fetchUserData } from '../Domain/Repositories/UserDataRepo';
import { userDataState } from '../Hooks/UserDataState';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { logInState } from '../Hooks/LogInState';


const UserDataService = () => {
  const setUserDataState = useSetRecoilState(userDataState);
  const setLogInState = useSetRecoilState(logInState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const setUserData = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserData();
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setUserDataState(response.data);
    setLoadingState(false);
  };

  const checkLogInState = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserData();
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setUserDataState(response.data);
    setLogInState(response.status_code !== 4);
    setLoadingState(false);
  };

  return { setUserData, checkLogInState };
};

export default UserDataService;
