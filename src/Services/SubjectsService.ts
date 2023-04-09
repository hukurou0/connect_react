import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from '../lib/helpers/errorHandler';
import { subjectsState } from '../Hooks/SubjectState';
import { fetchSubjects, postTimetableSubjects, timeTableSubjects } from '../Domain/Repositories/SubjectsRepo';
import { loadingState } from '../Hooks/LoadingState';
import { logInState } from '../Hooks/LogInState';
import { timetableState } from '../Hooks/TimetableSubjectState';
import { alertContentState } from '../Hooks/AlertContentState';
import { alertPresentationState } from '../Hooks/AlertPresentationState';

const SubjectsService = () => {
  const { catchCustomError } = ErrorHandler();
  const resetLogInState = useResetRecoilState(logInState);
  const setSubjects = useSetRecoilState(subjectsState);
  const setTimetablesubjects = useSetRecoilState(timetableState);
  const navigate = useNavigate();
  const setLoadingState = useSetRecoilState(loadingState);
  const setAlertState = useSetRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);

  const getAndSetSubjects = async (): Promise<void> => {
    setLoadingState(true);
    const response = await fetchSubjects();
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `科目の取得に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `科目の取得に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
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
      setAlertContent({
        title: 'エラー',
        message: `時間割の取得に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `時間割の取得に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setTimetablesubjects(response.data);
    setLoadingState(false);
  };

  const newPostTimetableSubject = async (id: number[]) => {
    setLoadingState(true);
    const response = await postTimetableSubjects(id);
    const customError = catchCustomError(response.status_code, resetLogInState, navigate);
    if (customError !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `時間割の更新に失敗しました。\n${customError.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    if (response.error !== undefined) {
      setAlertContent({
        title: 'エラー',
        message: `時間割の更新に失敗しました。\n${response.error.message}`,
      });
      setLoadingState(false);
      setAlertState(true);
      return;
    }
    setLoadingState(false);
  };

  return { getAndSetSubjects, getTimetableSubjects, newPostTimetableSubject };
};

export default SubjectsService;
