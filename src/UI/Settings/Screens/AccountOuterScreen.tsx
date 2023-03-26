import { Stack, Tabs } from '@mantine/core';
import { useEffect } from 'react';
import { IconList, IconSettings } from '@tabler/icons-react';
import DepartmentService from '../../../Services/DepartmentServices';
import UserDataService from '../../../Services/UserDataService';
import Settings from './SettingsScreen';
import UserTasksService from '../../../Services/UserTasksService';
import UserTasks from './UserTasksScreen';

const AccountOuterScreen = () => {
  const { getAndSetDepartments } = DepartmentService();
  const { setUserData } = UserDataService();
  const { getAndSetUserTasks } = UserTasksService();

  useEffect(() => {
    (async () => {
      await getAndSetDepartments();
      await setUserData();
      await getAndSetUserTasks();
    })();
  }, []);

  return (
    <Stack maw={800} w="100%" h="100%" align="stretch" justify="flex-start">
      <Tabs defaultValue="settings" radius="md" w="100%">
        <Tabs.List>
          <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
            設定
          </Tabs.Tab>
          <Tabs.Tab value="registeredTasks" icon={<IconList size="0.8rem" />}>
            登録した課題
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="settings" pt="xs">
          <Settings />
        </Tabs.Panel>

        <Tabs.Panel value="registeredTasks" pt="xs">
          <UserTasks />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

export default AccountOuterScreen;
