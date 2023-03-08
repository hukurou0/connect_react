import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { UserHeaderMenu } from '../common/UI/Components/UserHeader';
import { FooterSocial } from '../common/UI/Components/Footer';

const UserLayout = () => {
  return (
    <Stack justify="space-between" style={{minHeight: '100vh'}}>
      <UserHeaderMenu />
      <Outlet />
      <FooterSocial />
    </Stack>
  );
}

export default UserLayout;
