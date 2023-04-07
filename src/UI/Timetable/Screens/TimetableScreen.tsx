import { Button, ScrollArea, Stack, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ClassPicker } from '../../../common/UI/Components/ClassPicker';
import { TablesubjectData } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';
// import { BASEURL, TAKEN_GET_SUBJECT } from '../../../lib/constants/urls';
// import { ErrorHandler } from '../../../lib/helpers/errorHandler';
import { TimetablePicker } from '../../../common/UI/Components/TimetableSubjectPicker';
// import { TimetablePicker } from '../../../common/UI/Components/TimetableSubjectPicker';

const Timetable = () => {
  const [mon1, setMon1] = useState<TablesubjectData | undefined>(undefined);
  const [mon2, setMon2] = useState<TablesubjectData | undefined>(undefined);
  const [mon3, setMon3] = useState<TablesubjectData | undefined>(undefined);
  const [mon4, setMon4] = useState<TablesubjectData | undefined>(undefined);
  const [mon5, setMon5] = useState<TablesubjectData | undefined>(undefined);
  const [tue1, setTue1] = useState<TablesubjectData | undefined>(undefined);
  const [tue2, setTue2] = useState<TablesubjectData | undefined>(undefined);
  const [tue3, setTue3] = useState<TablesubjectData | undefined>(undefined);
  const [tue4, setTue4] = useState<TablesubjectData | undefined>(undefined);
  const [tue5, setTue5] = useState<TablesubjectData | undefined>(undefined);
  const [wed1, setWed1] = useState<TablesubjectData | undefined>(undefined);
  const [wed2, setWed2] = useState<TablesubjectData | undefined>(undefined);
  const [wed3, setWed3] = useState<TablesubjectData | undefined>(undefined);
  const [wed4, setWed4] = useState<TablesubjectData | undefined>(undefined);
  const [wed5, setWed5] = useState<TablesubjectData | undefined>(undefined);
  const [thu1, setThu1] = useState<TablesubjectData | undefined>(undefined);
  const [thu2, setThu2] = useState<TablesubjectData | undefined>(undefined);
  const [thu3, setThu3] = useState<TablesubjectData | undefined>(undefined);
  const [thu4, setThu4] = useState<TablesubjectData | undefined>(undefined);
  const [thu5, setThu5] = useState<TablesubjectData | undefined>(undefined);
  const [fri1, setFri1] = useState<TablesubjectData | undefined>(undefined);
  const [fri2, setFri2] = useState<TablesubjectData | undefined>(undefined);
  const [fri3, setFri3] = useState<TablesubjectData | undefined>(undefined);
  const [fri4, setFri4] = useState<TablesubjectData | undefined>(undefined);
  const [fri5, setFri5] = useState<TablesubjectData | undefined>(undefined);

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
    </tr>
  ));

  const { getAndSetSubjects, getTimetableSubjects, newPostTimetableSubject } = SubjectsService();

  useEffect(() => {
    getAndSetSubjects();
    getTimetableSubjects();
  }, []);

  return (
    <Stack align="center" w="100%">
      <ScrollArea w="95%">
        <Table>
          <thead>
            <tr>
              <th>限</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
            </tr>
          </thead>

          <tbody>
            <td>1</td>
            <td>
              <TimetablePicker selectedSubject={mon1} setSelection={setMon1} day={5} />
            </td>
            <td>
              <TimetablePicker selectedSubject={tue1} setSelection={setTue1} day={15} />
            </td>
            <td>
              <TimetablePicker selectedSubject={wed1} setSelection={setWed1} day={20} />
            </td>
            <td>
              <TimetablePicker selectedSubject={thu1} setSelection={setThu1} day={10} />
            </td>
            <td>
              <TimetablePicker selectedSubject={fri1} setSelection={setFri1} day={0} />
            </td>
          </tbody>
          <tbody>
            <td>2</td>
            <td>
              <TimetablePicker selectedSubject={mon2} setSelection={setMon2} day={6} />
            </td>
            <td>
              <TimetablePicker selectedSubject={tue2} setSelection={setTue2} day={16} />
            </td>
            <td>
              <TimetablePicker selectedSubject={wed2} setSelection={setWed2} day={21} />
            </td>
            <td>
              <TimetablePicker selectedSubject={thu2} setSelection={setThu2} day={11} />
            </td>
            <td>
              <TimetablePicker selectedSubject={fri2} setSelection={setFri2} day={1} />
            </td>
          </tbody>
          <tbody>
            <td>3</td>
            <td>
              <TimetablePicker selectedSubject={mon3} setSelection={setMon3} day={7} />
            </td>
            <td>
              <TimetablePicker selectedSubject={tue3} setSelection={setTue3} day={17} />
            </td>
            <td>
              <TimetablePicker selectedSubject={wed3} setSelection={setWed3} day={22} />
            </td>
            <td>
              <TimetablePicker selectedSubject={thu3} setSelection={setThu3} day={12} />
            </td>
            <td>
              <TimetablePicker selectedSubject={fri3} setSelection={setFri3} day={2} />
            </td>
          </tbody>
          <tbody>
            <td>4</td>
            <td>
              <TimetablePicker selectedSubject={mon4} setSelection={setMon4} day={8} />
            </td>
            <td>
              <TimetablePicker selectedSubject={tue4} setSelection={setTue4} day={18} />
            </td>
            <td>
              <TimetablePicker selectedSubject={wed4} setSelection={setWed4} day={23} />
            </td>
            <td>
              <TimetablePicker selectedSubject={thu4} setSelection={setThu4} day={13} />
            </td>
            <td>
              <TimetablePicker selectedSubject={fri4} setSelection={setFri4} day={3} />
            </td>
          </tbody>
          <tbody>
            <td>5</td>
            <td>
              <TimetablePicker selectedSubject={mon5} setSelection={setMon5} day={9} />
            </td>
            <td>
              <TimetablePicker selectedSubject={tue5} setSelection={setTue5} day={19} />
            </td>
            <td>
              <TimetablePicker selectedSubject={wed5} setSelection={setWed5} day={24} />
            </td>
            <td>
              <TimetablePicker selectedSubject={thu5} setSelection={setThu5} day={14} />
            </td>
            <td>
              <TimetablePicker selectedSubject={fri5} setSelection={setFri5} day={4} />
            </td>
          </tbody>
        </Table>
      </ScrollArea>
      <Button
        radius="xl"
        size="lg"
        maw={250}
        style={{ marginTop: 25 }}
        onClick={async () => {
          await newPostTimetableSubject([
            mon1?.id,
            tue1?.id,
            wed1?.id,
            thu1?.id,
            fri1?.id,
            mon2?.id,
            tue2?.id,
            wed2?.id,
            thu2?.id,
            fri2?.id,
            mon3?.id,
            tue3?.id,
            wed3?.id,
            thu3?.id,
            fri3?.id,
            mon4?.id,
            tue4?.id,
            wed4?.id,
            thu4?.id,
            fri4?.id,
            mon5?.id,
            tue5?.id,
            wed5?.id,
            thu5?.id,
            fri5?.id,
          ]);
          console.log(mon1?.id);
        }}
      >
        時間割登録
      </Button>
    </Stack>
  );
};

export default Timetable;
