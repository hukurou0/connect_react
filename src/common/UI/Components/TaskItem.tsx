import { Stack, Title, Text, Flex, Card, Modal } from '@mantine/core';
import { FC, useState } from 'react';
import { IconCircleFilled } from '@tabler/icons-react';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDate } from '../../../lib/helpers/generateDate';
import { color, label } from '../../../lib/helpers/taskDifficulty';

interface TaskItemProps {
  task: TaskData;
}

export const TaskItem: FC<TaskItemProps> = ({ task }: TaskItemProps) => {
  const [isPresented, setPresentState] = useState(false);

  return (
    // TODO: API Function
    <>
      <Modal
        opened={isPresented}
        onClose={() => setPresentState(false)}
        title={task.subject_name}
        centered
        withinPortal
        radius="lg"
        size="xl"
        withCloseButton
      >
        <Stack align="stretch">
          <Flex align="center" justify="space-between">
            <Title order={2}>{task.summary}</Title>
            <Stack align="flex-end">
              <Text size="md" color="gray" style={{ marginRight: 7 }}>
                {'期日: '}
                {generateDate(task.deadline_year, task.deadline_month, task.deadline_day).toLocaleDateString()}
              </Text>
              <Flex align="center" style={{ padding: 5, borderRadius: 50, backgroundColor: `rgba(244, 244, 244, .7)` }}>
                <Text size="md">{label(task.difficulty)}</Text>
                <IconCircleFilled size={20} opacity={0.8} style={{ color: `${color(task.difficulty)}` }} />
              </Flex>
            </Stack>
          </Flex>
          <Text style={{ margin: 10 }}>{task.detail}</Text>
        </Stack>
      </Modal>

      <Card shadow="sm" padding="lg" radius="lg" w="90%" withBorder onClick={() => setPresentState(true)}>
        <Stack>
          <Text>{task.subject_name}</Text>
          <Flex align="center" justify="space-between">
            <Title order={2}>{task.summary}</Title>
            <Stack align="flex-end">
              <Text size="md" color="gray" style={{ marginRight: 7 }}>
                {'期日: '}
                {generateDate(task.deadline_year, task.deadline_month, task.deadline_day).toLocaleDateString()}
              </Text>
              <Flex align="center" style={{ padding: 5, borderRadius: 50, backgroundColor: `rgba(244, 244, 244, .7)` }}>
                <Text size="md">{label(task.difficulty)}</Text>
                <IconCircleFilled size={20} opacity={0.8} style={{ color: `${color(task.difficulty)}` }} />
              </Flex>
            </Stack>
          </Flex>
          <Text lineClamp={1} style={{ margin: 10 }}>
            {task.detail}
          </Text>
        </Stack>
      </Card>
    </>
  );
};
