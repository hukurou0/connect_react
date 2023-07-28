import { createStyles, Container, Title, Text, rem} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  inner: {
    position: 'relative',
  },

  image: {
    ...theme.fn.cover(),
    opacity: 0.75,
  },

  content: {
    paddingTop: rem(220),
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

const NoPage = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Connectはサービス終了しました</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Connectは2023年7月28日をもってサービスを終了いたしました。ご利用いただきましてありがとうございました。
          </Text>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            管理者にご用のある方はこちらからお願いします。
          </Text>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            junjun.0712.on@gmail.com
          </Text>
        </div>
      </div>
    </Container>
  );
};

export default NoPage;
