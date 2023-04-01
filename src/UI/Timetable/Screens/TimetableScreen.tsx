import { Button, ScrollArea, Stack, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClassPicker } from '../../../common/UI/Components/ClassPicker';
import { SubjectData, TablesubjectData, TimetableResponse } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';
import { BASEURL, TAKEN_GET_SUBJECT } from '../../../lib/constants/urls';
import { ErrorHandler } from '../../../lib/helpers/errorHandler';
// import { TimetablePicker } from '../../../common/UI/Components/TimetableSubjectPicker';

const Timetable = () => {
  const [selectedSubject, setSelection] = useState<SubjectData | undefined>(undefined);
  const [a, b] = useState<TablesubjectData | undefined>(undefined);

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
    // getTimetableSubjects();
  }, []);

  const timeTableSubjects = async (): Promise<TimetableResponse> => {
    const { makeErrorData } = ErrorHandler();
    try {
      const response = await axios.post(BASEURL + TAKEN_GET_SUBJECT, {
        user_id: sessionStorage.getItem('user_id'),
        data: {},
      });

      const { data } = response;

      console.log(response.data.data);

      const subjectsResponse = {
        status_code: data.status_code,
        data: data.data,
      };
      return subjectsResponse;
    } catch (error) {
      const errorData = makeErrorData(error);
      const subjectsResponse = {
        status_code: 0,
        data: [],
        error: errorData,
      };
      return subjectsResponse;
    }
  };

  useEffect(() => {
    timeTableSubjects();
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
      {/* <TimetablePicker selectedSubject={a} setSelection={b} day={0} /> */}
      <Button
        radius="xl"
        size="lg"
        maw={250}
        style={{ marginTop: 25 }}
        onClick={async () => {
          // await newpostSubject([a!.id, a1!.id]);
          console.log(a!.id);
        }}
      >
        時間割登録
      </Button>
    </Stack>
  );
};

export default Timetable;
