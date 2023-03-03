import { HeaderMenu } from '../components/Header';
import { FooterSocial } from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { createStyles, Stack, Space } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh'
  },
}));

const Layout = () => {
  const { classes } = useStyles();

  return (
    <Stack justify="space-between" className={classes.wrapper}>
      <HeaderMenu />
      <Outlet />
      <FooterSocial />
    </Stack>
  );
}

export default Layout;
