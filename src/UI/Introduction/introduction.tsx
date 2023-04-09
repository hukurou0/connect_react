import { Divider, Stack, Title, Text, createStyles, rem, Image, Space, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const Introduction = () => {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem('user_id');
    if (userId !== null) {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <Stack maw={800} w="95%" align="center">
      <Title>
        課題管理アプリ <span style={{ color: '#48AAF9' }}>Connect</span>
      </Title>
      <Text tt="uppercase" fz="md">
        課題の管理を面倒に思ったことはありませんか？不定期で急に出された課題を見逃したりしたことはないでしょうか？
        <br />
        このサービスは、そんな問題を人と共に課題管理することで解決できます！
      </Text>
      <Space h="md" />
      <div>
        {!userLoggedIn && (
          <Button
            onClick={() => {
              navigate('/login');
            }}
          >
            ログインへ
          </Button>
        )}
      </div>
      <Space h="ms" />
      <Divider w="100%" />
      <Title order={2}>機能紹介</Title>
      <Feature
        icon={IconList}
        title="課題表示機能"
        description="履修している科目で出された課題を一目で確認できます。 課題の締め切りや大変さに応じて自動的に「やばい課題」に分類されるので優先度が分かりやすいです。また課題表示をするには、課題の登録が必要になります。"
      />
      <Image src={TaskDisplaySC} maw={400} />
      <Divider w="100%" />
      <Feature
        icon={IconPlus}
        title="課題追加機能"
        description="授業で出された課題を追加します。既に登録されている課題を登録しようとすると、自動で候補を表示するので効率的です。"
      />
      <Image src={TaskRegistSC} maw={400} />
      <Divider w="100%" />
      <Feature
        icon={IconUser}
        title="アカウント設定機能"
        description="アカウント情報の確認、変更が出来ます。ユーザ削除やログアウトもこちらからできます。"
      />
      <Image src={UserInfoSC} maw={400} />
    </Stack>
  );
};

export default Introduction;
