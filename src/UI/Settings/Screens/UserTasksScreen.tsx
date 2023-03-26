import { Divider, Text, Stack, Title } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { TaskItem } from '../../../common/UI/Components/TaskItem';
import { userTasksState } from '../../../Hooks/UserTasksState';
import UserTasksService from '../../../Services/UserTasksService';
import { userDataState } from '../../../Hooks/UserDataState';

const UserTasks = () => {
  const { deleteTask } = UserTasksService();
  const userTasks = useRecoilValue(userTasksState);
  const userData = useRecoilValue(userDataState);

  return (
    <Stack w="100%" align="center">

      <Title order={4} style={{ marginTop: 20, marginBottom: 15 }}>課題表示期限: {(new Date(userData.iso_visible_limit).toLocaleDateString())}</Title>

      <Stack justify="flex-start" w='90%' style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Title order={2} style={{ margin: 0 }}>登録した課題一覧</Title>
        <Text style={{ margin: 0 }} color='gray' size='md'>新規で登録した課題のみ削除できます。重複して登録したものは削除せきません。</Text>
      </Stack>
      <Divider w='90%' />
      {userTasks.map((task, index) => (
        <TaskItem
          task={task}
          key={index}
          onDelete={async () => {
            await deleteTask(task);
          }}
        />
      ))}
    </Stack>
  );
};

export default UserTasks;
