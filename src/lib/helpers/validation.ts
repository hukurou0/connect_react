import { DepartmentData } from '../../Domain/Entities/DepartmentEntity';
import { PASSWORD_REGEX, USERNAME_REGEX } from '../constants/regex';

const isVailed = (isLogIn: boolean, username: string, password: string, department?: DepartmentData | undefined) => {
  if (USERNAME_REGEX.test(username) && PASSWORD_REGEX.test(password)) {
    if (isLogIn) return true;

    return department !== undefined;
  }
  return false;
};

export default isVailed;
