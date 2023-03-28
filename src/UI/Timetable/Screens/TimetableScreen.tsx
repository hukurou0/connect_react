import { ScrollArea, Stack, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ClassPicker } from '../../../common/UI/Components/ClassPicker';
import { SubjectData } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';

const Timetable = () => {
  const [selectedSubject, setSelection] = useState<SubjectData | undefined>(undefined);

  const elements = [
    { time: 1, class: '線形代数', room: 'Ⅳ-402' },
    { time: 2, class: '-', room: '' },
    { time: 3, class: '-', room: '' },
    { time: 4, class: '線形代数', room: 'Ⅶ-LLL5' },
    { time: 5, class: '-', room: '' },
  ];
  const rows = elements.map((element) => (
    <tr key={element.time}>
      <td>{element.time}</td>
      <td>
        <ClassPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </td>
      <td>
        <ClassPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </td>
      <td>
        <ClassPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </td>
      <td>
        <ClassPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </td>
      <td>
        <ClassPicker selectedSubject={selectedSubject} setSelection={setSelection} />
      </td>
    </tr>
  ));

  const { getAndSetSubjects } = SubjectsService();

  useEffect(() => {
    getAndSetSubjects();
  }, []);

  return (
    <Stack align="center" w="100%">
      <ScrollArea w="95%">
        <Table>
          <thead>
            <tr>
              <th> </th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Stack>
  );
};

export default Timetable;
