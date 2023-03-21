import { DepartmentData } from '../../common/Domain/Entities/DepartmentEntity';
import { PASSWORD_REGEX, USERNAME_REGEX } from '../constants/regex';

const isVailed = (username: string, password: string, department: DepartmentData | undefined) => {
  if (USERNAME_REGEX.test(username) && PASSWORD_REGEX.test(password) && department !== undefined) {
    return true;
  }
  return false;
};

export default isVailed;
