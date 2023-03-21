import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { PublicHeaderMenu } from '../common/UI/Components/PublicHeader';
import { FooterSocial } from '../common/UI/Components/Footer';

const PublicLayout = () => (
  <Stack justify="space-between" style={{ minHeight: '100vh' }}>
    <PublicHeaderMenu />
    <Outlet />
    <FooterSocial />
  </Stack>
);

export default PublicLayout;
