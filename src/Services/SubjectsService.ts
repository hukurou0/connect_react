import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { catchCustomError } from '../lib/helpers/errorHandler';
import { subjectsState } from '../Hooks/SubjectState';
import { fetchSubjects } from '../Domain/Repositories/SubjectsRepo';
import { loadingState } from '../Hooks/LoadingState';

const SubjectsService = () => {
  const setSubjects = useSetRecoilState(subjectsState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetSubjects = async (): Promise<void> => {
    setLoadingState(true);
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
    setLoadingState(false);
  };

  return { getAndSetSubjects };
};

export default SubjectsService;
