import { Button, ScrollArea, Stack, Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TablesubjectData } from '../../../Domain/Entities/SubjectEntity';
import SubjectsService from '../../../Services/SubjectsService';
import { TimetablePicker } from '../../../common/UI/Components/TimetableSubjectPicker';

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

  const { getAndSetSubjects, getTimetableSubjects, newPostTimetableSubject } = SubjectsService();
 
  const navigate = useNavigate();
  
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
          navigate('/user')
          await newPostTimetableSubject([
            mon1?.id ?? 0,
            tue1?.id ?? 0,
            wed1?.id ?? 0,
            thu1?.id ?? 0,
            fri1?.id ?? 0,
            mon2?.id ?? 0,
            tue2?.id ?? 0,
            wed2?.id ?? 0,
            thu2?.id ?? 0,
            fri2?.id ?? 0,
            mon3?.id ?? 0,
            tue3?.id ?? 0,
            wed3?.id ?? 0,
            thu3?.id ?? 0,
            fri3?.id ?? 0,
            mon4?.id ?? 0,
            tue4?.id ?? 0,
            wed4?.id ?? 0,
            thu4?.id ?? 0,
            fri4?.id ?? 0,
            mon5?.id ?? 0,
            tue5?.id ?? 0,
            wed5?.id ?? 0,
            thu5?.id ?? 0,
            fri5?.id ?? 0,
          ]);
        }}
      >
        時間割登録
      </Button>
    </Stack>
  );
};

export default Timetable;
