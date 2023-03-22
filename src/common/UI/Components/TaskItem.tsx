import { Stack, Title, Text, Flex, Card } from '@mantine/core';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDaate } from '../../../lib/helpers/generateDate';

export const TaskItem = ({ task }: { task: TaskData }) => (
  // TODO: API Function
  <Card key={task.detail} shadow="sm" padding="lg" radius="lg" withBorder onClick={() => {}}>
    <Stack>
      <Flex align="center" justify="space-between">
        <Title order={2}>{task.summary}</Title>
        <Text size="md" color="gray">
          {'期日: '}
          {generateDaate(task.deadlineYear, task.deadlineMonth, task.deadlineDay).toLocaleDateString()}
        </Text>
      </Flex>
      <Text>{task.detail}</Text>
    </Stack>
  </Card>
);
