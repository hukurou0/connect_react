import { Stack } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { TaskItem } from '../../../common/UI/Components/TaskItem';
import { userTasksState } from '../../../Hooks/UserTasksState';
import UserTasksService from '../../../Services/UserTasksService';

const UserTasks = () => {
  const { deleteTask } = UserTasksService();
  const userTasks = useRecoilValue(userTasksState);

  return (
    <Stack w="100%" align="stretch">
      {userTasks.map((task, index) => <TaskItem task={task} key={index} showModel={false} onDelete={ async () => { await deleteTask(task)}} />)}
    </Stack>
  );
}

export default UserTasks;
