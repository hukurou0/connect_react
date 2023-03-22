import { Stack, Title, Text, Flex, Card } from '@mantine/core';
import { IconCircleFilled } from '@tabler/icons-react';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDaate } from '../../../lib/helpers/generateDate';
import { color, label } from '../../../lib/helpers/taskDifficulty';

export const TaskItem = ({ task }: { task: TaskData }) => (
  // TODO: API Function
  <Card key={task.detail} shadow="sm" padding="lg" radius="lg" withBorder onClick={() => { }}>
    <Stack>
      <Flex align="center" justify="space-between">
        <Title order={2}>{task.summary}</Title>
        <Flex align='center' columnGap={5}>
          <Text size="md" color="gray" style={{ marginRight: 7 }}>
            {'期日: '}
            {generateDaate(task.deadlineYear, task.deadlineMonth, task.deadlineDay).toLocaleDateString()}
          </Text>
          <Flex align='center' style={{ padding: 5, borderRadius: 50, backgroundColor: `rgba(244, 244, 244, .7)`}}>
            <Text size='md'>{label(task.difficulty)}</Text>
            <IconCircleFilled size={20} opacity={0.8} style={{ color: `${color(task.difficulty)}` }} />
          </Flex>
        </Flex>
      </Flex>
      <Text>{task.detail}</Text>
    </Stack>
  </Card>
);
