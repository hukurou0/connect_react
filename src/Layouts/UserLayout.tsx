import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { UserHeaderMenu } from '../common/UI/Components/UserHeader';
import { FooterSocial } from '../common/UI/Components/Footer';

const UserLayout = () => (
  <Stack justify="space-between" mih="100vh">
    <UserHeaderMenu />
    <Stack h="100%" w="100%" align="center">
      <Outlet />
    </Stack>
    <FooterSocial />
  </Stack>
);

export default UserLayout;
