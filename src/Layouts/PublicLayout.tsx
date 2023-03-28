import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PublicHeaderMenu isLoggedIn={isLoggedIn} userData={isLoggedIn ? userData : undefined} />
      <Stack style={{ flex: 1 }} h="100%" w="100%" align='center'>
        <Outlet />
      </Stack>
      <FooterSocial />
    </div>
  );
};

export default PublicLayout;
