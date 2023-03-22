import { Stack, Button, Text, Flex, Divider } from '@mantine/core';
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

const Settings = () => {
  const { getAndSetDepartments, updateDepartment } = DepartmentService();
  const { setUserData } = UserDataService();
  const { logOut } = LogOutService();
  const departments = useRecoilValue(departmentsState);
  const userData = useRecoilValue(userDataState);
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);

  useEffect(() => {
    (async () => {
      await getAndSetDepartments();
      await setUserData();
    })();
  }, []);

  useEffect(() => {
    setSelection(getDepartment(userData?.department_id, departments));
  }, [userData]);

  return (
    <Stack maw={800} w="100%" align="stretch">
      {/* Left Bar */}
      <Stack style={{ padding: 20 }}>
        <Flex justify="space-between" style={{ paddingLeft: 20, paddingRight: 20 }}>
          <h2 style={{ margin: 0 }}>アカウント設定</h2>
          <Button
            radius="xl"
            size="md"
            color="orange"
            variant="light"
            rightIcon={<IconDoorExit size="1.2rem" stroke={1.5} />}
            onClick={async () => {
              await logOut();
            }}
          >
            ログアウト
          </Button>
        </Flex>
        <Divider />

        {/* Right Contents */}
        <Flex w="100%">
          <Stack w="40%" align="center" style={{ textAlign: 'left' }}>
            <div>
              <div style={{ backgroundColor: '#E7E9ED', borderRadius: 100, padding: 10 }}>
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
              <Button maw={250} style={{ marginTop: 25 }}>
                パスワード変更
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Settings;
