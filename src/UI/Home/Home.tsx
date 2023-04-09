import { Divider, Stack, Title, Text, createStyles, rem, Image } from '@mantine/core';
import { IconList, IconPlus, IconUser } from '@tabler/icons-react';
import TaskDisplaySC from '../../common/Assets/screenshots/task_display.png';
import TaskRegistSC from '../../common/Assets/screenshots/task_regist.png';
import UserInfoSC from '../../common/Assets/screenshots/user_info.png';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    width: '95%',
  },

  overlay: {
    position: 'absolute',
    height: rem(90),
    width: rem(160),
    top: 10,
    left: 10,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    zIndex: 1,
    borderRadius: theme.radius.lg,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description, className, ...others }: FeatureProps) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
};

const Home = () => (
  <Stack maw={800} w="95%" align="center">
    <Title>
      課題管理SNS <span style={{ color: '#48AAF9' }}>Connect</span>
      <br />
      4/10リリース!
    </Title>
    <Divider w="100%" />
    <Title order={2}>機能紹介</Title>
    <Feature
      icon={IconList}
      title="課題表示機能"
      description="履修している科目で出された課題を一目で確認できます！ 期日が迫っていたり、事前に大変なものに設定していた課題は、「やばい課題」に分類され優先度が分かりやすい！"
    />
    <Image src={TaskDisplaySC} maw={400} />
    <Divider w="100%" />
    <Feature
      icon={IconPlus}
      title="課題追加機能"
      description="授業で出された課題を追加できます！もし既にある課題を追加する場合は、自動で候補が出てきます！"
    />
    <Image src={TaskRegistSC} maw={400} />
    <Divider w="100%" />
    <Feature
      icon={IconUser}
      title="アカウント設定機能"
      description="アカウント情報の再登録ができます！転科などで所属学科などが変更になっても対応できます！"
    />
    <Image src={UserInfoSC} maw={400} />
  </Stack>
);

export default Home;
