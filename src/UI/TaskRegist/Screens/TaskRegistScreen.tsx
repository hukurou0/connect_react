import { Stack, Flex, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
// import { useRecoilValue } from 'recoil';
import { SubjectPicker } from '../../UserTop/Components/SubjectPicker';
// import { subjectsState } from '../../../Hooks/SubjectState';
import { SubjectData } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';

const TaskRegist = () => {
  const { getAndSetSubjects } = SubjectsService();

  // const subjects = useRecoilValue(subjectsState);
  const [selectedSubject, setSelection] = useState<SubjectData | undefined>(undefined);

  useEffect(() => {
    getAndSetSubjects();
  }, []);

  return (
    <Stack align="center">
      <h2>TaskRegist</h2>
      <Flex justify="space-around" align="center">
        <Text>科目</Text>
        <SubjectPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </Flex>
    </Stack>
  );
};

export default TaskRegist;
