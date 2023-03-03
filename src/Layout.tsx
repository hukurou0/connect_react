import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { HeaderMenu } from './common/UI/Components/Header';
import { FooterSocial } from './common/UI/Components/Footer';

const Layout = () => {
  return (
    <Stack justify="space-between" style={{minHeight: '100vh'}}>
      <HeaderMenu />
      <Outlet />
      <FooterSocial />
    </Stack>
  );
}

export default Layout;
