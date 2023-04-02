import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { loadingState } from '../Hooks/LoadingState';
import { fetchUserData } from '../Domain/Repositories/UserDataRepo';
import { userDataState } from '../Hooks/UserDataState';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { logInState } from '../Hooks/LogInState';

const UserDataService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setUserDataState = useSetRecoilState(userDataState);
  const setLogInState = useSetRecoilState(logInState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const setUserData = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserData();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      console.log(customError);
      setLoadingState(false);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      setLoadingState(false);
      return;
    }
    setUserDataState(response.data);
    setLoadingState(false);
  };

  const checkLogInState = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserData();
    console.log(response);

    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      console.log(customError);
      setLoadingState(false);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      setLoadingState(false);
      return;
    }
    setUserDataState(response.data);
    setLogInState(response.status_code === 1);
    setLoadingState(false);
  };

  return { setUserData, checkLogInState };
};

export default UserDataService;
