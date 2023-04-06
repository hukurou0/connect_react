import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { loadingState } from '../Hooks/LoadingState';
import { fetchUserData } from '../Domain/Repositories/UserDataRepo';
import { userDataState } from '../Hooks/UserDataState';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { logInState } from '../Hooks/LogInState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const UserDataService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setUserDataState = useSetRecoilState(userDataState);
  const setLogInState = useSetRecoilState(logInState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const setUserData = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchUserData();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `ユーザーデータの取得に失敗しました。\n${customError.message} (c_${customError.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `ユーザーデータの取得に失敗しました。\n${response.error.message} (${response.error.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
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
      setAlertContent({
        title: 'エラー',
        message: `ログイン状態の取得に失敗しました。\n${customError.message} (c_${customError.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `ログイン状態の取得に失敗しました。\n${response.error.message} (${response.error.status})`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setUserDataState(response.data);
    setLogInState(response.status_code === 1);
    setLoadingState(false);
  };

  return { setUserData, checkLogInState };
};

export default UserDataService;
