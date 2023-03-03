import { DepartmentData } from "../../features/Auth/Domain/Entities/DepartmentEntity";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";

const isVailed = (email: string, password: string, department: DepartmentData | undefined) => {
    if(EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password) && department !== undefined) return true;
}

export default isVailed;