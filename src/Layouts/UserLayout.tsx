import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { UserHeaderMenu } from '../common/UI/Components/UserHeader';
import { FooterSocial } from '../common/UI/Components/Footer';

const UserLayout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <UserHeaderMenu />
    <Stack style={{ flex: 1 }} mih="100%" w="100%" align="center">
      <Outlet />
    </Stack>
    <FooterSocial />
  </div>
);

export default UserLayout;
