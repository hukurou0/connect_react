/* eslint-disable react/require-default-props */

import {
  createStyles,
  Header,
  Group,
  Button,
  Text,
  Divider,
  Box,
  Drawer,
  ScrollArea,
  Image,
  rem,
  Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import { UserData } from '../../../Domain/Entities/UserDataEntity';

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

interface HeaderProps {
  isLoggedIn: boolean;
  userData?: UserData | undefined;
}

export const PublicHeaderMenu = ({ isLoggedIn, userData }: HeaderProps) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={60}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" columnGap={8}>
              <Image width={30} height={30} src={logo} alt="Logo" />
              <Text style={{ color: '#48AAF9', fontSize: 18 }}>Connect</Text>
            </Flex>
          </Link>

          {/* <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Group> */}

          {/* Wait For Public Release */}
          {/* <Group>
            {isLoggedIn ? (
              <Button variant="light" color="#48AAF9" radius="xl" size="md" component={Link} to="user">
                <Text>ユーザートップ</Text>
                <IconHome />
              </Button>
            ) : (
              <Group className={classes.hiddenMobile}>
                <Button variant="default" component={Link} to="/logIn">
                  Log In
                </Button>
                <Button component={Link} to="/signUp">
                  Sign Up
                </Button>
              </Group>
            )}

            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Group> */}
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
          {/* <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link to="/" className={classes.link} onClick={closeDrawer}>
            ホーム
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="/" className={classes.link} onClick={closeDrawer}>
            Learn
          </Link>
          <Link to="/test" className={classes.link} onClick={closeDrawer}>
            Academy
          </Link> */}

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group>
            {isLoggedIn ? (
              <Link to="/" className={classes.link} onClick={closeDrawer}>
                <IconHome style={{ marginRight: 10 }} />
                ユーザートップ
              </Link>
            ) : (
              <Group className={classes.hiddenMobile}>
                <Button variant="default" component={Link} to="/logIn">
                  Log In
                </Button>
                <Button component={Link} to="/signUp">
                  Sign Up
                </Button>
              </Group>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
