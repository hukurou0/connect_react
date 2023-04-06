import { useSetRecoilState } from 'recoil';
import { duplicateTask, newTask } from '../Domain/Repositories/NewTasksRepo';
import { loadingState } from '../Hooks/LoadingState';

const NewTasksService = () => {
  const setLoadingState = useSetRecoilState(loadingState);

  const newduplicateTask = async (taskId: number) => {
    setLoadingState(true);
    const response = await duplicateTask(taskId);
    if (response.error !== undefined) {
      setLoadingState(false);
    }
  };

  const newaddTask = async (
    subject_id: number,
    subject_name: string,
    task_id: number,
    deadline_year: number,
    deadline_month: number,
    deadline_day: number,
    summary: string,
    details: string,
    difficulty: number
  ) => {
    setLoadingState(true);
    const response = await newTask(
      subject_id,
      subject_name,
      task_id,
      deadline_year,
      deadline_month,
      deadline_day,
      summary,
      details,
      difficulty
    );

    if (response.error !== undefined) {
      setLoadingState(false);
    }
    setLoadingState(false);
  };

  return { newduplicateTask, newaddTask };
};

export default NewTasksService;
