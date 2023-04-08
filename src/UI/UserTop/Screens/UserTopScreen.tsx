/* eslint-disable indent */

import { Stack, Flex, Text, Title, Divider, createStyles, Space } from '@mantine/core';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { TaskItem } from '../../../common/UI/Components/TaskItem';
import AllTasksService from '../../../Services/AllTasksService';
import { allTasksDataState } from '../../../Hooks/AllTasksState';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDate } from '../../../lib/helpers/generateDate';
import displayTimetable from '../../../Services/DisplayTimeService';
import { userTableDataState } from '../../../Hooks/UserTimetableState';
// import { getTimetable } from '../../../Domain/Repositories/TimetableRepo';

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const UserTop = () => {
  const { classes } = useStyles();
  const today = new Date();
  const { getAndSetAllTasks } = AllTasksService();
  const allTasksData = useRecoilValue(allTasksDataState);
  const { todayTimetable } = displayTimetable();
  const allTableData = useRecoilValue(userTableDataState);
  // const elements = [
  //   { time: 1, class: '線形代数', room: 'Ⅳ-402' },
  //   { time: 2, class: '-', room: '' },
  //   { time: 3, class: '-', room: '' },
  //   { time: 1, class: '線形代数', room: 'Ⅶ-LLL5' },
  //   { time: 5, class: '-', room: '' },
  // ];
  // const rows = elements.map((element, index) => (
  //   <tr key={index}>
  //     <td>{element.time}</td>
  //     <td>{element.class}</td>
  //     <td>{element.room}</td>
  //   </tr>
  // ));

  useEffect(() => {
    getAndSetAllTasks();
    todayTimetable();
  }, []);

  console.log(allTableData[1]);
  console.log(allTableData.timeTable?.map((a) => a.name));

  console.log(allTasksData.tasks);

  const isDeadlineApproaching = (task: TaskData): boolean => {
    const deadline = generateDate(task.deadline_year, task.deadline_month, task.deadline_day);
    const duration = Math.abs(deadline.getTime() - today.getTime());
    const days = Math.ceil(duration / (1000 * 3600 * 24));
    return days <= 3;
  };

  const isOutdated = (task: TaskData): boolean => {
    const deadline = generateDate(task.deadline_year, task.deadline_month, task.deadline_day);
    const duration = Math.abs(deadline.getTime() - today.getTime());
    const days = Math.ceil(duration / (1000 * 3600 * 24));
    return days < 0;
  };

  return (
    <Stack maw={800} w="100%" align="center">
      <Title order={4} style={{ marginBottom: 20 }}>
        課題表示: {new Date(allTasksData.visible_limit).toLocaleDateString()}まで
      </Title>

      {/* Timetable */}
      <Stack
        w="calc(100% - 40px)"
        align="center"
        style={{ padding: 10, background: '#fff', borderRadius: 20, boxShadow: '0px 5px 20px #D7D7D7' }}
      >
        <Flex justify="space-between" w="95%" align="center">
          <Title order={2}>今日の時間割</Title>
          <Text size="md" color="gray">
            {today.toLocaleDateString()}
          </Text>
        </Flex>
        <Space />

        <Flex justify="space-between" w="95%">
          <Stack w="20%" align="center">
            <Text>1限</Text>
            <Text size="sm">{allTableData[0]?.name ?? '空きコマ'}</Text>
          </Stack>
          <Stack w="20%" align="center">
            <Text>2限</Text>
            <Text>{allTableData[1]?.name ?? '空きコマ'}</Text>
          </Stack>
          <Stack w="20%" align="center">
            <Text>3限</Text>
            <Text>{allTableData[2]?.name ?? '空きコマ'}</Text>
          </Stack>
          <Stack w="20%" align="center">
            <Text>4限</Text>
            <Text>{allTableData[3]?.name ?? '空きコマ'}</Text>
          </Stack>
          <Stack w="20%" align="center">
            <Text>5限</Text>
            <Text>{allTableData[4]?.name ?? '空きコマ'}</Text>
          </Stack>
        </Flex>
        <Divider w="95%" />
      </Stack>

      <Stack w="100%" align="center" style={{ marginTop: 20 }}>
        <Flex className={classes.hiddenMobile} w="95%" align="center" columnGap={10}>
          <Title order={2}>やばい課題</Title>
          <Text>(期限が3日以内・大変さが「やばい」の課題)</Text>
        </Flex>
        <Stack className={classes.hiddenDesktop} w="95%" align="center">
          <Title order={2}>やばい課題</Title>
          <Text color="gray">期限が3日以内・大変さが「やばい」の課題</Text>
        </Stack>
        <Divider w="95%" />
        {allTasksData.tasks.filter(
          (task) => task.difficulty === 5 || (isDeadlineApproaching(task) && !isOutdated(task))
        ).length === 0 ? (
          <Title order={3} color="gray">
            やばい課題はありません。
          </Title>
        ) : (
          allTasksData.tasks
            .filter((task) => task.difficulty === 5 || (isDeadlineApproaching(task) && !isOutdated(task)))
            .map((task, index) => <TaskItem task={task} key={`5_${index}`} deadlineApproacing />)
        )}
      </Stack>

      <Stack w="100%" align="center" style={{ marginTop: 20 }}>
        <Flex w="95%" align="center" columnGap={10}>
          <Title order={2}>課題一覧</Title>
        </Flex>
        <Divider w="95%" />
        {allTasksData.tasks.length === 0 ? (
          <Title order={3} color="gray">
            課題はありません。
          </Title>
        ) : (
          allTasksData.tasks
            .filter((task) => !isOutdated(task))
            .map((task, index) => <TaskItem task={task} key={index} />)
        )}
      </Stack>
    </Stack>
  );
};
export default UserTop;
