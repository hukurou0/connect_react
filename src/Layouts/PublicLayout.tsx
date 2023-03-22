import { Outlet } from 'react-router-dom';
import { Container, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { PublicHeaderMenu } from '../common/UI/Components/PublicHeader';
import { FooterSocial } from '../common/UI/Components/Footer';
import UserDataService from '../Services/UserDataService';
import { userDataState } from '../Hooks/UserDataState';
import { logInState } from '../Hooks/LogInState';

const PublicLayout = () => {
  const isLoggedIn = useRecoilValue(logInState);
  const userData = useRecoilValue(userDataState);
  const { checkLogInState } = UserDataService();
  useEffect(() => {
    (async () => {
      await checkLogInState();
    })();
  }, []);

  return (
    <Stack justify="space-between" mih="100vh">
      <PublicHeaderMenu isLoggedIn={false} userData={isLoggedIn ? userData : undefined} />
      <Container h="100%" w="100%">
        <Outlet />
      </Container>
      <FooterSocial />
    </Stack>
  );
};

export default PublicLayout;
