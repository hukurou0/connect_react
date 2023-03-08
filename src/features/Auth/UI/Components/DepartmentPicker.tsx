import { useState } from 'react';
import { createStyles, UnstyledButton, Menu, Group, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useRecoilValue } from 'recoil';
import { departmentsState } from '../../Hooks/DepartmentsState';
import { DepartmentData } from '../../Domain/Entities/DepartmentEntity';

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(200),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
    transition: 'background-color 150ms ease',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
          ? theme.colors.gray[0]
          : theme.white,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
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
  selectedDepartment: DepartmentData | undefined,
  setSelection: React.Dispatch<React.SetStateAction<DepartmentData | undefined>>
}

export const DepartmentPicker = ({ selectedDepartment, setSelection }: Params) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const departments = useRecoilValue(departmentsState);
  const items = departments.map((item) => (
    <Menu.Item
      onClick={() => setSelection(item)}
      key={item.name}
    >
      {item.name}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{selectedDepartment?.name ?? "学部を選択してください"}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}