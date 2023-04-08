import React, { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Group, rem } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { TablesubjectData } from '../../../Domain/Entities/SubjectEntity';
import { timetableState } from '../../../Hooks/TimetableSubjectState';

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    // border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[opened ? 5 : 6] : opened ? theme.colors.gray[0] : theme.white,
    // '&:hover': {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    // },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: 'transform 150ms ease',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));

interface Params {
  selectedSubject: TablesubjectData | undefined;
  setSelection: React.Dispatch<React.SetStateAction<TablesubjectData | undefined>>;
  day: number;
}

// export const registerdId = (day: number) => {
//   const days = useRecoilValue(timetableState);
//   const A = Object.values(days);
//   const takenId = A?.map((item) => item.taken_id);
//   const Id = takenId[day];

//   return Id;
// };

export const TimetablePicker = ({ selectedSubject, setSelection, day }: Params) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const days = useRecoilValue(timetableState);
  console.log(days);
  const A = Object.values(days);
  // console.log(A);
  const items = A?.map((item) => item.classes);
  const takenId = A?.map((item) => item.taken_id);
  console.log(takenId);
  console.log(items);

  // const [F, SetF] = useState('');

  // const G = () => {
  //   takenId.forEach((id) => {
  //     const obj = items[5]?.find((item) => item.id === id);
  //     if (obj) {
  //       SetF(obj.name);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   G();
  // }, []);

  // console.log(F);

  // mon : 5 ~ 9
  // tue : 15 ~ 19
  // wed : 20 ~ 24
  // thu : 10 ~ 14
  // fri : 0 ~ 4

  const TableSubject = items[day]?.map((item) => (
    <Menu.Item defaultValue={item.id} onClick={() => setSelection(item)} key={item.name}>
      {item.name}
    </Menu.Item>
  ));
  console.log(selectedSubject);

  // if (takenId.map((item) => item) === items[day].map((item) => item.id)) {
  //   return console.log(items[day].map((item) => item.name));
  // }

  //   const first = A?.map((item) => item.classes[1]);
  //   console.log(Object.values(items[0]).map((item) => item));

  // const selectedClass = A?.find((item) => item.taken_id === selectedSubject?.id);
  // console.log(selectedClass);

  // const test = items[day].find((item) => item.id === 1);
  // console.log(test);

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target" withinPortal>
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{selectedSubject?.name ?? 't'}</span>
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{TableSubject}</Menu.Dropdown>
    </Menu>
  );
};
