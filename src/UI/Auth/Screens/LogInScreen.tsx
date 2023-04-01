import { Alert, Button, Overlay, Space, Stack, Title } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import UsernameInput from '../Components/UsernameInput';
// import UserDataService from '../../../Services/UserDataService';
import AuthService from '../../../Services/AuthService';
// import isVailed from '../../../../lib/helpers/validation';

const LogIn = () => {
  const { onLogIn } = AuthService();
  // const { setUserData } = UserDataService();
  const [isErrorShown, setErrorVisivility] = useState(false);
  const [usernameInput, setUsername] = useInputState('');
  const [passwordInput, setPassword] = useInputState('');

  return (
    <Stack maw={500} w="100%" align="center">
      <Stack align="center" w='100%'>
        <Title order={2}>ログイン</Title>

        <Stack w='90%' align='stretch'>
          <UsernameInput username={usernameInput} setUsername={setUsername} />

          <PasswordInputWithNotes password={passwordInput} setPassword={setPassword} />

          <Space mt="md" />

          <Button
            size='md'
            radius='lg'
            onClick={async () => {
              /** This is for production */
              // const isVailedInputs = isVailed(usernameInput, passwordInput);
              /** This is for test */
              const isVailedInputs = usernameInput.length !== 0 && passwordInput.length !== 0;

              if (!isVailedInputs) {
                setErrorVisivility(!isErrorShown);
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

      {isErrorShown && (
        <Overlay center w='100%' style={{ position: 'fixed' }} onClick={() => setErrorVisivility(false)}>
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Error"
            color="red"
            radius="lg"
            withCloseButton
            onClose={() => setErrorVisivility(false)}
          >
            全項目を正しく入力してください。
          </Alert>
        </Overlay>
      )}
    </Stack>
  );
};

export default LogIn;
