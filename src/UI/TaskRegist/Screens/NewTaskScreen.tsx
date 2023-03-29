import { Stack, Title, Divider, Text, Flex, Textarea, TextInput, Slider, Button } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IconCircleFilled } from '@tabler/icons-react';
import { useInputState } from '@mantine/hooks';
import NewTasksService from '../../../Services/NewTasksService';
import { SubjectData } from '../../../Domain/Entities/SubjectEntity';
import { color, label } from '../../../lib/helpers/taskDifficulty';
import { TaskData } from '../../../Domain/Entities/TaskEntity';

export const NewTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [summary, setSummary] = useInputState('');
  const [details, setDetails] = useInputState('');
  const [difficulty, setDifficulty] = useState(2);
  const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } };
  const isDisabled = summary === '' || details === '';
  const A = location.state.subject as TaskData;
  const { newaddTask } = NewTasksService();

  return (
    <Stack maw={800} w="100%" align="center">
      <Stack w="95%" align="center">
        <Title order={2}>課題の詳細を入力しましょう</Title>
        <Text color="gray">課題を新しく追加することで、課題の表示期間が延長されます。</Text>
        <Divider w="100%" />

        <Flex align="center" justify="space-around" w="100%" style={{ marginTop: 10, marginBottom: 10 }}>
          <Title order={3}>{(location.state.subject as SubjectData).name}</Title>
          <Text color="gray">{(location.state.deadline as Date).toLocaleDateString()}</Text>
        </Flex>

        <TextInput
          value={summary}
          onChange={setSummary}
          placeholder="概要"
          label="課題の概要"
          radius="lg"
          size="md"
          w="95%"
          withAsterisk
          required
        />
        <Textarea
          placeholder="詳細"
          label="課題の詳細"
          radius="lg"
          size="md"
          w="95%"
          withAsterisk
          required
          value={details}
          onChange={setDetails}
        />

        <Stack align="center" maw={400} w="90%">
          <Flex justify="space-between" maw={400} w="80%">
            <Text>大変さ</Text>
            <Text>{label(difficulty)}</Text>
          </Flex>
          <Slider
            thumbChildren={<IconCircleFilled size="1rem" stroke={1.5} />}
            color={color(difficulty)}
            label={null}
            max={4}
            value={difficulty}
            onChange={setDifficulty}
            styles={styles}
            maw={400}
            w="80%"
          />
        </Stack>

        <Button
          radius="xl"
          size="lg"
          maw={250}
          disabled={isDisabled}
          style={{ marginTop: 25 }}
          onClick={async () => {
            await newaddTask(
              subject_id,
              subject_name,
              task_id,
              deadline_year,
              deadline_month,
              deadline_day,
              summary,
              details,
              difficulty
            );
            navigate('/user');
          }}
        >
          課題を追加
        </Button>
      </Stack>
    </Stack>
  );
};
