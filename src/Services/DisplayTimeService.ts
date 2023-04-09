import { useSetRecoilState } from 'recoil';
import { loadingState } from '../Hooks/LoadingState';
import { getTimetable } from '../Domain/Repositories/TimetableRepo';
import { userTableDataState } from '../Hooks/UserTimetableState';

const displayTimetable = () => {
  const setLoadingState = useSetRecoilState(loadingState);
  const setUserTable = useSetRecoilState(userTableDataState);

  const todayTimetable = async () => {
    setLoadingState(true);
    const response = await getTimetable();
    if (response.error !== undefined) {
      setLoadingState(false);
    }
    setUserTable(response.data);
  };

  return { todayTimetable };
};

export default displayTimetable;
