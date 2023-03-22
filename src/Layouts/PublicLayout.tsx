import { Outlet } from 'react-router-dom';
import { Container, Stack } from '@mantine/core';
import { PublicHeaderMenu } from '../common/UI/Components/PublicHeader';
import { FooterSocial } from '../common/UI/Components/Footer';

const PublicLayout = () => (
  <Stack justify='space-between' mih='100vh'>
    <PublicHeaderMenu />
    <Container h="100%" w="100%">
      <Outlet />
    </Container>
    <FooterSocial />
  </Stack>
);

export default PublicLayout;
