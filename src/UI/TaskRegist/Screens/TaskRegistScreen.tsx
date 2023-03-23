import { Stack, Flex, Text, Title, Divider, Button, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { DateInput } from '@mantine/dates';
import { SubjectPicker } from '../../../common/UI/Components/SubjectPicker';
import { SubjectData } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';
import HomeworkImage from '../../../common/Assets/homework.png';
import RegisteredTasksService from '../../../Services/RegisteredTasksService';

const TaskRegist = () => {
  const { getAndSetSubjects } = SubjectsService();
  const { getAndSetRegisteredTasks } = RegisteredTasksService();

  const [selectedSubject, setSelection] = useState<SubjectData | undefined>(undefined);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const isDisabled = selectedSubject === undefined || dueDate === null;

  useEffect(() => {
    getAndSetSubjects();
  }, []);

  return (
    <Stack maw={800} w="100%" align="center">
      <Flex w="100%" align="center" justify="center">
        <Stack w="50%" align="center">
          <Image src={HomeworkImage} width="80%" fit="contain" />
        </Stack>
        <Stack>
          <Title order={2}>課題を追加しましょう</Title>
          <Text>課題を追加すると課題の表示期間を伸ばすことができます。</Text>
        </Stack>
      </Flex>

      <Divider w="90%" />

      <Title order={4}>追加する課題の科目と提出期日を入力してください</Title>

      <Flex justify="space-around" align="center" columnGap={20} style={{ marginTop: 15 }}>
        <Text>科目</Text>
        <Stack align="center">
          <SubjectPicker selectedSubject={selectedSubject} setSelection={setSelection} />
          <Text color="gray" size="sm">
            履修科目のみ選択できます。
          </Text>
        </Stack>
      </Flex>

      <Flex justify="space-around" align="center" columnGap={20} style={{ marginTop: 10 }}>
        <Text>期日</Text>
        <DateInput
          value={dueDate}
          onChange={setDueDate}
          placeholder="期日"
          mx="auto"
          radius="md"
          width="target"
          size="md"
        />
      </Flex>

      <Button
        radius="xl"
        size="lg"
        maw={250}
        disabled={isDisabled}
        style={{ marginTop: 25 }}
        onClick={async () => {
          await getAndSetRegisteredTasks(selectedSubject!, dueDate!);
        }}
      >
        課題を作成する
      </Button>
    </Stack>
  );
};

export default TaskRegist;
