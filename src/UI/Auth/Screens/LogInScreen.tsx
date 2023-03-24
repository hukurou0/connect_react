import { Alert, Button, Overlay, Space, Stack } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import UsernameInput from '../Components/UsernameInput';
import UserDataService from '../../../Services/UserDataService';
import AuthService from '../../../Services/AuthService';
// import isVailed from '../../../../lib/helpers/validation';

const LogIn = () => {
  const { onLogIn } = AuthService();
  const { setUserData } = UserDataService();
  const [isErrorShown, setErrorVisivility] = useState(false);
  const [usernameInput, setUsername] = useInputState('');
  const [passwordInput, setPassword] = useInputState('');

  return (
    <>
      <Stack align="center">
        <h2>ログイン</h2>

        <Stack w={300} spacing={15}>
          <UsernameInput username={usernameInput} setUsername={setUsername} />

          <PasswordInputWithNotes password={passwordInput} setPassword={setPassword} />

          <Space mt="md" />

          <Button
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
              await setUserData();
            }}
          >
            ログイン
          </Button>
        </Stack>
      </Stack>

      {isErrorShown && (
        <Overlay center style={{ position: 'fixed' }} onClick={() => setErrorVisivility(false)}>
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
    </>
  );
};

export default LogIn;
