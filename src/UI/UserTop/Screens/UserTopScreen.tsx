import { Stack, Flex, Text, Title, Table, Divider } from '@mantine/core';
import { TaskItem } from '../../../common/UI/Components/TaskItem';

const UserTop = () => {
  const today = new Date();

  const elements = [
    { time: 1, class: '線形代数', room: 'Ⅳ-402' },
    { time: 2, class: '-', room: '' },
    { time: 3, class: '-', room: '' },
    { time: 1, class: '線形代数', room: 'Ⅶ-LLL5' },
    { time: 5, class: '-', room: '' },
  ];
  const rows = elements.map((element) => (
    <tr key={element.time}>
      <td>{element.time}</td>
      <td>{element.class}</td>
      <td>{element.room}</td>
    </tr>
  ));

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

      <Stack
        w="95%"
        align="center"
        style={{ padding: 15, marginTop: 20 }}
      >
        <Flex w="95%" align="center" columnGap={10}>
          <Title order={2}>やばい課題</Title>
          <Text>(期限が3日以内・大変さが「やばい」の課題)</Text>
        </Flex>
        <Divider w="95%" />
        <TaskItem
          task={{
            subjectId: 0,
            taskId: 0,
            deadlineYear: 0,
            deadlineMonth: 0,
            deadlineDay: 0,
            summary: '線形代数',
            detail: '詳細',
            difficulty: 5,
          }}
        />
      </Stack>

      <Stack
        w="95%"
        align="center"
        style={{ padding: 15, marginTop: 20 }}
      >
        <Flex w="95%" align="center" columnGap={10}>
          <Title order={2}>課題課題一覧</Title>
        </Flex>
        <Divider w="95%" />
        <TaskItem
          task={{
            subjectId: 0,
            taskId: 0,
            deadlineYear: 0,
            deadlineMonth: 0,
            deadlineDay: 0,
            summary: '線形代数',
            detail: '詳細',
            difficulty: 5,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default UserTop;
