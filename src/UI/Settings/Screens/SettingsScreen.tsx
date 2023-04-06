import { Stack, Button, Text, Flex, Divider, Title, createStyles } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { IconUser, IconDoorExit } from '@tabler/icons-react';
import { DepartmentData } from '../../../Domain/Entities/DepartmentEntity';
import { departmentsState } from '../../../Hooks/DepartmentsState';
import { getDepartment } from '../../../lib/helpers/getDepartment';
import DepartmentService from '../../../Services/DepartmentServices';
import { userDataState } from '../../../Hooks/UserDataState';
import UserDataService from '../../../Services/UserDataService';
import LogOutService from '../../../Services/LogOutService';
import { DepartmentPicker } from '../../../common/UI/Components/DepartmentPicker';

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const Settings = () => {
  const { classes } = useStyles();
  const { updateDepartment } = DepartmentService();
  const { setUserData } = UserDataService();
  const { logOut } = LogOutService();
  const departments = useRecoilValue(departmentsState);
  const userData = useRecoilValue(userDataState);
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);

  useEffect(() => {
    setSelection(getDepartment(userData?.department_id, departments));
  }, [userData]);

  return (
    <Stack w="100%" align="stretch">
      <Stack style={{ padding: 20 }} align="center">
        <Title order={4} style={{ marginBottom: 15 }}>
          課題表示期限: {new Date(userData.iso_visible_limit).toLocaleDateString()}
        </Title>

        <Flex justify="space-between" w="95%" style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Title order={2} style={{ margin: 0 }}>
            アカウント設定
          </Title>
          <Button
            radius="xl"
            size="md"
            color="orange"
            variant="light"
            rightIcon={<IconDoorExit className={classes.hiddenMobile} size="1.2rem" stroke={1.5} />}
            onClick={async () => {
              await logOut();
            }}
          >
            <div className={classes.hiddenMobile}>ログアウト</div>
            <IconDoorExit className={classes.hiddenDesktop} size="1.2rem" stroke={1.5} />
          </Button>
        </Flex>
        <Divider w="95%" />

        {/* Desktop */}
        <Flex w="100%" className={classes.hiddenMobile}>
          {/* Left Bar */}
          <Stack w="40%" align="center" style={{ textAlign: 'left' }}>
            <div>
              <div style={{ backgroundColor: '#E7E9ED', borderRadius: 100, padding: 10, width: 'fit-content' }}>
                <IconUser size={80} color="#ffffff" fill="#E7E9ED" />
              </div>
              <Stack align="flex-start">
                <Text size="xl" weight="bold" style={{ marginTop: 10 }}>
                  {userData?.username}
                </Text>
                <Text size="sm">{userData?.department}</Text>
              </Stack>
            </div>
          </Stack>

          <Stack w="60%" align="flex-start" style={{ padding: 15 }}>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>ユーザー名</Text>
              <Text>{userData?.username}</Text>
            </Flex>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>メールアドレス</Text>
              <Text>{userData?.mail}</Text>
            </Flex>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>課程</Text>
              <DepartmentPicker selectedDepartment={selectedDepartment} setSelection={setSelection} />
            </Flex>

            <Stack w="100%" align="center">
              <Button
                radius="lg"
                maw={250}
                style={{ marginTop: 25 }}
                onClick={async () => {
                  if (selectedDepartment !== undefined) {
                    await updateDepartment(selectedDepartment.id);
                    await setUserData();
                  }
                }}
              >
                変更を保存
              </Button>
              <Button radius="lg" maw={250} style={{ marginTop: 25 }}>
                パスワード変更
              </Button>
            </Stack>
          </Stack>
        </Flex>

        {/* Mobile */}
        <Stack w="100%" className={classes.hiddenDesktop} align="center">
          <Flex w="100%" align="center" columnGap={20}>
            <div style={{ backgroundColor: '#E7E9ED', borderRadius: 100, padding: 10 }}>
              <IconUser size={80} color="#ffffff" fill="#E7E9ED" />
            </div>
            <Stack align="center" w="calc(100% - 120px)">
              <Text size="xl" weight="bold" style={{ marginTop: 10 }}>
                {userData?.username}
              </Text>
              <Text size="sm">{userData?.department}</Text>
            </Stack>
          </Flex>

          <Stack w="100%" align="center" style={{ margin: 15 }}>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>ユーザー名</Text>
              <Text>{userData?.username}</Text>
            </Flex>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>メールアドレス</Text>
              <Text>{userData?.mail}</Text>
            </Flex>
            <Flex justify="space-between" align="stretch" w="100%">
              <Text>課程</Text>
              <DepartmentPicker selectedDepartment={selectedDepartment} setSelection={setSelection} />
            </Flex>

            <Stack w="100%" align="center">
              <Button
                size="md"
                radius="lg"
                maw={250}
                style={{ marginTop: 25 }}
                onClick={async () => {
                  if (selectedDepartment !== undefined) {
                    await updateDepartment(selectedDepartment.id);
                    await setUserData();
                  }
                }}
              >
                変更を保存
              </Button>
              <Button size="md" radius="lg" maw={250} style={{ marginTop: 25 }}>
                パスワード変更
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;
