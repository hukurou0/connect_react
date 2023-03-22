import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { subjectsState } from '../Hooks/SubjectState';
import { fetchSubjects } from '../Domain/Repositories/SubjectsRepo';

const SubjectsService = () => {
  const setSubjects = useSetRecoilState(subjectsState);
  const navigate = useNavigate();

  const getAndSetSubjects = async (): Promise<void> => {
    const response = await fetchSubjects();
    const customError = catchCustomError(response.status_code, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setSubjects(response.data);
  };

  return { getAndSetSubjects };
};

export default SubjectsService;
