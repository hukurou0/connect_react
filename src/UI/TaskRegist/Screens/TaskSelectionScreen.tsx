import { useRecoilValue } from 'recoil';
import { Button, Divider, Space, Stack, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { registeredTasksState } from '../../../Hooks/RegisteredTasksState';
import { TaskItem } from '../../../common/UI/Components/TaskItem';

export const TaskSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const registeredTasks = useRecoilValue(registeredTasksState);

  useEffect(() => {
    if (registeredTasks.length === 0) {
      navigate('/user/regist_task');
    }
  });

  return (
    <Stack maw={800} w="100%" align="center">
      <Title>すでに登録済みの課題があります</Title>
      <Text color="gray">追加したい課題が一覧にある場合、クリックすると課題表示期間が延長されます。</Text>
      <Divider w="100%" />
      <Stack align="stretch" w="90%">
        {registeredTasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </Stack>
      <Space h={20} />
      <Text color="gray">追加したい課題が一覧に無い場合、ここから新しく追加ができます。</Text>
      <Button
        radius="xl"
        size="lg"
        maw={250}
        onClick={async () => navigate('/user/create_new_task', { state: location.state })}
      >
        課題を新しく追加
      </Button>
    </Stack>
  );
};
