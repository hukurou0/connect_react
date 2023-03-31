import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { logIn, signUp } from '../Domain/Repositories/AuthRepo';
import { loadingState } from '../Hooks/LoadingState';

const AuthService = () => {
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const onLogIn = async (username: string, password: string): Promise<void> => {
    setLoadingState(true);
    const response = await logIn(username, password);
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    sessionStorage.setItem('user_id', JSON.stringify(response.data.user_id));
    setLoadingState(false);
    
    const userId = sessionStorage.getItem('user_id')
    if (userId !== null) {
      /* 画面表示 */
    }else {
      navigate('/login');
    }
    
    navigate('/user');
  };

  const onSignUp = async (username: string, password: string, departmentId: number): Promise<void> => {
    setLoadingState(true);
    const response = await signUp(username, password, departmentId);
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setLoadingState(false);
    navigate('/user');
  };

  return { onLogIn, onSignUp };
};

export default AuthService;
