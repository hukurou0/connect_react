import { Button, Space, Stack, Title, Text, Divider, Image } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import UsernameInput from '../Components/UsernameInput';
// import UserDataService from '../../../Services/UserDataService';
import AuthService from '../../../Services/AuthService';
import isVailed from '../../../lib/helpers/validation';
import { alertPresentationState } from '../../../Hooks/AlertPresentationState';
import { alertContentState } from '../../../Hooks/AlertContentState';
import sharejpg from '../../../common/Assets/screenshots/share.jpg';
import addHomejpg from '../../../common/Assets/screenshots/add_home.jpg';

const LogIn = () => {
  const { onLogIn } = AuthService();
  // const { setUserData } = UserDataService();
  const [isErrorShown, setErrorVisivility] = useRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);
  const [usernameInput, setUsername] = useInputState('');
  const [passwordInput, setPassword] = useInputState('');

  return (
    <Stack maw={500} w="100%" align="center">
      <Stack align="center" w="100%">
        <Title order={2}>ログイン</Title>

        <Stack w="90%" align="stretch">
          <UsernameInput username={usernameInput} setUsername={setUsername} />

          <PasswordInputWithNotes password={passwordInput} setPassword={setPassword} />

          <Space mt="md" />
          <Text tt="uppercase" fz="md" c="yellow">
          アプリを使いやすくするためにインストールをしてください。インストール方法は下で説明しています。
          </Text>
          <Button
            size="md"
            radius="lg"
            onClick={async () => {
              if (usernameInput.length === 0 || passwordInput.length === 0) {
                setErrorVisivility(true);
                setAlertContent({ title: 'エラー', message: '入力されていない項目があります。' });
                return;
              }

              /** This is for production */
              const isVailedInputs = isVailed(true, usernameInput, passwordInput);
              /** This is for test */
              // const isVailedInputs = usernameInput.length !== 0 && passwordInput.length !== 0;

              if (!isVailedInputs) {
                setErrorVisivility(!isErrorShown);
                setAlertContent({ title: 'エラー', message: 'すべての項目を正しく入力してください。' });
                return;
              }

              await onLogIn(usernameInput, passwordInput);
              // await setUserData();
            }}
          >
            ログイン
          </Button>
          <Divider w="100%" />
          <Title order={2}>インストール方法</Title>
          <Space h="ms" />
          <Text tt="uppercase" fz="md">
          1.画面下部の共有ボタンを押します。
          </Text>
          <Image src={sharejpg} maw={400} />
          <Space h="ms" />
          <Text tt="uppercase" fz="md">
          2.ホーム画面に追加を押します。
          </Text>
          <Image src={addHomejpg} maw={400} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LogIn;
