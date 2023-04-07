import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { logIn, signUp } from '../Domain/Repositories/AuthRepo';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const AuthService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const onLogIn = async (username: string, password: string): Promise<void> => {
    setLoadingState(true);
    const response = await logIn(username, password);
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `ログインできませんでした。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `ログインできませんでした。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    sessionStorage.setItem('user_id', JSON.stringify(response.data.user_id));
    setLoadingState(false);
    navigate('/introduction');
  };

  const onSignUp = async (username: string, password: string, departmentId: number): Promise<void> => {
    setLoadingState(true);
    const response = await signUp(username, password, departmentId);
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `サインアップできませんでした。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `サインアップできませんでした。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    sessionStorage.setItem('user_id', JSON.stringify(response.data.user_id));
    setLoadingState(false);
    navigate('/user');
  };

  return { onLogIn, onSignUp };
};

export default AuthService;
