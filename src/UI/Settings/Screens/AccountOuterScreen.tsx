import { Stack, Tabs } from '@mantine/core';
import { useEffect } from 'react';
import { IconList, IconSettings } from '@tabler/icons-react';
import DepartmentService from '../../../Services/DepartmentServices';
import UserDataService from '../../../Services/UserDataService';
import Settings from './SettingsScreen';

const AccountOuterScreen = () => {
  const { getAndSetDepartments } = DepartmentService();
  const { setUserData } = UserDataService();

  useEffect(() => {
    (async () => {
      await getAndSetDepartments();
      await setUserData();
    })();
  }, []);

  return (
    <Stack maw={800} w="100%" h='100%' align="stretch" justify='flex-start'>
      <Tabs defaultValue="settings" radius="lg" w='100%' >
        <Tabs.List>
          <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>設定</Tabs.Tab>
          <Tabs.Tab value="registeredTasks" icon={<IconList size="0.8rem" />}>登録した課題</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="settings" pt="xs">
          <Settings />
        </Tabs.Panel>

        <Tabs.Panel value="registeredTasks" pt="xs">
          Messages tab content
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

export default AccountOuterScreen;
