import { createStyles, Container, Group, Image, rem, Text, Anchor } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export const FooterSocial = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image width={28} height={28} src={logo} alt="Logo" />
        <Text size="xs" color="gray">
          Copyright © 2023 Connect All rights reserved.
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link to="/introduction" color="gray" style={{ padding: 10, fontSize: 'small' }}>
            アプリ説明
          </Link>
          <Link to="/credits" color="gray" style={{ padding: 10, fontSize: 'small' }}>
            クレジット
          </Link>
          <Link to="/privacy_policy" color="gray" style={{ padding: 10, fontSize: 'small' }}>
            プライバシーポリシー
          </Link>
          <Link to="/terms_of_use" color="gray" style={{ padding: 10, fontSize: 'small' }}>
            利用規約
          </Link>
          <Anchor color="purple" href="https://instagram.com/connect_.official?igshid=YmMyMTA2M2Y=">
            <IconBrandInstagram size="2rem" stroke={1.5} />
          </Anchor>
        </Group>
      </Container>
    </div>
  );
};
