import { Header, Group, Button, Text, Box, Image, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconUserCircle } from '@tabler/icons-react';
import logo from '../../Assets/logo.jpg';

export const UserHeaderMenu = () => (
  <Box pb={120}>
    <Header height={60} px="md">
      <Group position="apart" sx={{ height: '100%' }}>
        <Link to="/user" style={{ textDecoration: 'none' }}>
          <Flex align="center" columnGap={8}>
            <Image width={30} height={30} src={logo} alt="Logo" />
            <Text style={{ color: '#48AAF9', fontSize: 18 }}>Connect</Text>
          </Flex>
        </Link>

        <Group>
          <Button
            variant="light"
            color='#48AAF9'
            radius="xl"
            size="md"
            component={Link} to="settings">
            <Flex align="center" columnGap={8}>
              <IconUserCircle />
              <Text size="md">アカウント</Text>
            </Flex>
          </Button>
        </Group>
      </Group>
    </Header>
  </Box>
);
