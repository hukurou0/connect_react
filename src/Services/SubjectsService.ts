import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { subjectsState } from '../Hooks/SubjectState';
import { fetchSubjects, postTimetableSubjects, timeTableSubjects } from '../Domain/Repositories/SubjectsRepo';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';
import { timetableState } from '../Hooks/TimetableSubjectState';

const SubjectsService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setSubjects = useSetRecoilState(subjectsState);
  const setTimetablesubjects = useSetRecoilState(timetableState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);

  const getAndSetSubjects = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchSubjects();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
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

  const getTimetableSubjects = async (): Promise<void> => {
    setLoadingState(true);
    const response = await timeTableSubjects();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      console.log(customError);
      return;
    }
    if (response.error !== undefined) {
      console.log(response.error);
      return;
    }
    setTimetablesubjects(response.data);
    setLoadingState(false);
  };

  const newPostTimetableSubject = async (id: number[]) => {
    setLoadingState(true);
    const response = await postTimetableSubjects(id);
    if (response.error !== undefined) {
      console.log(response.error);
    }
    console.log(response);
    setLoadingState(false);
  };

  return { getAndSetSubjects, getTimetableSubjects, newPostTimetableSubject };
};

export default SubjectsService;
