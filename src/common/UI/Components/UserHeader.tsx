import {
  Header,
  Group,
  Button,
  Text,
  Box,
  Image,
  Flex,
  createStyles,
  rem,
  Drawer,
  Divider,
  ScrollArea,
  Burger,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { IconUserCircle } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../Assets/logo.jpg';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const UserHeaderMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate()

  return (
    <Box pb={60}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <Flex align="center" columnGap={8}>
              <Image width={30} height={30} src={logo} alt="Logo" />
              <Text style={{ color: '#48AAF9', fontSize: 18 }}>Connect</Text>
            </Flex>
          </Link>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/user" className={classes.link}>
              課題リスト
            </Link>
            <Link to="/user/regist_task" className={classes.link}>
              課題追加
            </Link>
            <Link to="/user/timetable" className={classes.link}>
              時間割
            </Link>
          </Group>

          <Group>
            <Button variant="light" color="#48AAF9" radius="xl" size="md" component={Link} to="settings">
              <Text>アカウント</Text>
              <IconUserCircle />
            </Button>

            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group>
        </Group>
      </Header>

      {/* For Mobile */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Connect"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link to="/user" className={classes.link} onClick={closeDrawer}>
            課題リスト
          </Link>
          <Link to="/user/regist_task" className={classes.link} onClick={closeDrawer}>
            課題追加
          </Link>
          <Link to="/user/timetable" className={classes.link} onClick={closeDrawer}>
            時間割
          </Link>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default" onClick={()=>{
              navigate('/user/settings')
            }}>
              アカウント
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
