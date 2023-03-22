import { useNavigate } from 'react-router-dom';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { logIn, signUp } from '../Domain/Repositories/AuthRepo';

const AuthService = () => {
  const navigate = useNavigate();

  const onLogIn = async (username: string, password: string): Promise<void> => {
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
    navigate('/user');
  };

  const onSignUp = async (username: string, password: string, departmentId: number): Promise<void> => {
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
    navigate('/user');
  };

  return { onLogIn, onSignUp };
};

export default AuthService;
