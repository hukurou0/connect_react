import { Stack, Flex, Text, Title, Table, Divider } from '@mantine/core';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { TaskItem } from '../../../common/UI/Components/TaskItem';
import AllTasksService from '../../../Services/AllTasksService';
import { allTasksDataState } from '../../../Hooks/AllTasksState';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDate } from '../../../lib/helpers/generateDate';

const UserTop = () => {
  const today = new Date();
  const { getAndSetAllTasks } = AllTasksService();
  const allTasksData = useRecoilValue(allTasksDataState);

  const elements = [
    { time: 1, class: '線形代数', room: 'Ⅳ-402' },
    { time: 2, class: '-', room: '' },
    { time: 3, class: '-', room: '' },
    { time: 1, class: '線形代数', room: 'Ⅶ-LLL5' },
    { time: 5, class: '-', room: '' },
  ];
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.time}</td>
      <td>{element.class}</td>
      <td>{element.room}</td>
    </tr>
  ));

  useEffect(() => {
    getAndSetAllTasks();
  }, []);

  const isDeadlineApproaching = (task: TaskData): boolean => {
    const deadline = generateDate(task.deadline_year, task.deadline_month, task.deadline_day);
    const duration = Math.abs(deadline.getTime() - today.getTime());
    const days = Math.ceil(duration / (1000 * 3600 * 24));
    return (days <= 3);
  };

  const isOutdated = (task: TaskData): boolean => {
    const deadline = generateDate(task.deadline_year, task.deadline_month, task.deadline_day);
    const duration = Math.abs(deadline.getTime() - today.getTime());
    const days = Math.ceil(duration / (1000 * 3600 * 24));
    return (days < 0);
  }

  return (
    <Stack maw={800} w="100%" align="center">
      <Stack
        w="90%"
        align="center"
        style={{ padding: 15, background: '#fff', borderRadius: 20, boxShadow: '0px 5px 20px #D7D7D7' }}
      >
        <Flex justify="space-between" w="95%" align="center">
          <Title order={2}>今日の時間割</Title>
          <Text size="md" color="gray">
            {today.toLocaleString()}
          </Text>
        </Flex>
        <Divider w="95%" />
        <Table>
          <thead>
            <tr>
              <th>時間</th>
              <th>科目</th>
              <th>教室</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Stack>

      <Stack w="95%" align="center" style={{ padding: 15, marginTop: 20 }}>
        <Flex w="95%" align="center" columnGap={10}>
          <Title order={2}>やばい課題</Title>
          <Text>(期限が3日以内・大変さが「やばい」の課題)</Text>
        </Flex>
        <Divider w="95%" />
        {allTasksData.tasks
          .filter((task) => task.difficulty === 5 || (isDeadlineApproaching(task) && !isOutdated(task)))
          .map((task) => (
            <TaskItem task={task} />
          ))}
      </Stack>

      <Stack w="95%" align="center" style={{ padding: 15, marginTop: 20 }}>
        <Flex w="95%" align="center" columnGap={10}>
          <Title order={2}>課題一覧</Title>
        </Flex>
        <Divider w="95%" />
        {allTasksData.tasks.filter((task) => !isOutdated(task)).map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default UserTop;
