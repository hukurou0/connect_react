import { Button, Space, Stack, Title } from '@mantine/core';
import { useDisclosure, useInputState } from '@mantine/hooks';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import UsernameInput from '../Components/UsernameInput';
// import UserDataService from '../../../Services/UserDataService';
import AuthService from '../../../Services/AuthService';
import isVailed from '../../../lib/helpers/validation';
import { alertPresentationState } from '../../../Hooks/AlertPresentationState';
import { alertContentState } from '../../../Hooks/AlertContentState';

const LogIn = () => {
  const { onLogIn } = AuthService();
  // const { setUserData } = UserDataService();
  const [isErrorShown, setErrorVisivility] = useRecoilState(alertPresentationState);
  const setAlertContent = useSetRecoilState(alertContentState);
  const [usernameInput, setUsername] = useInputState('');
  const [passwordInput, setPassword] = useInputState('');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack maw={500} w="100%" align="center">
      <Stack align="center" w="100%">
        <Title order={2}>ログイン</Title>

        <Stack w="90%" align="stretch">
          <UsernameInput username={usernameInput} setUsername={setUsername} />

          <PasswordInputWithNotes password={passwordInput} setPassword={setPassword} />

          <Space mt="md" />

          <Button
            size="md"
            radius="lg"
            onClick={async () => {
              /** This is for production */
              const isVailedInputs = isVailed(true, usernameInput, passwordInput);
              /** This is for test */
              // const isVailedInputs = usernameInput.length !== 0 && passwordInput.length !== 0;

              if (!isVailedInputs) {
                setErrorVisivility(!isErrorShown);
                setAlertContent({ title: 'エラー', message: '入力されていない項目があります。' });
                return;
              }

              await onLogIn(usernameInput, passwordInput);
              // await setUserData();
            }}
          >
            ログイン
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LogIn;
