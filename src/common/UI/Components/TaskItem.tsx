/* eslint-disable react/require-default-props */

import { Stack, Title, Text, Flex, Card, Modal, UnstyledButton, Button } from '@mantine/core';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconCircleFilled, IconTrash } from '@tabler/icons-react';
import { TaskData } from '../../../Domain/Entities/TaskEntity';
import { generateDate } from '../../../lib/helpers/generateDate';
import { color, label } from '../../../lib/helpers/taskDifficulty';
import RegisteredTasksService from '../../../Services/RegisteredTasksService';

interface TaskItemProps {
  task: TaskData;
  showModel?: boolean;
  deadlineApproacing?: boolean;
  onDelete?: () => Promise<void>;
  onClick?: () => void;
}

export const TaskItem: FC<TaskItemProps> = ({
  task,
  showModel = true,
  deadlineApproacing = false,
  onDelete,
  onClick = () => {},
}: TaskItemProps) => {
  const [isPresented, setPresentState] = useState(false);
  const { newduplicateTask } = RegisteredTasksService();
  const navigate = useNavigate();

  return (
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
          <Button
            radius="xl"
            size="lg"
            onClick={async () => {
              await newduplicateTask(task.task_id);
              navigate('/user/');
            }}
          >
            課題を追加
          </Button>
        </Stack>
      </Modal>

      <Card
        shadow="sm"
        padding="lg"
        radius="lg"
        w="95%"
        withBorder
        style={{ borderColor: `${deadlineApproacing ? 'red' : ''}` }}
        onClickCapture={() => {
          if (showModel) {
            setPresentState(true);
          } else {
            onClick();
          }
        }}
      >
        <Stack>
          <Flex align="center" justify="space-between">
            <Text>{task.subject_name}</Text>
            {onDelete !== undefined ? (
              <UnstyledButton
                onClick={async () => {
                  setPresentState(false);
                  onDelete();
                }}
              >
                <IconTrash color="red" />
              </UnstyledButton>
            ) : (
              <> </>
            )}
          </Flex>
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
