import { Alert, Button, Overlay, Space, Stack } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import { logIn } from '../../Domain/Repositories/AuthRepo';
import { AuthResponse } from '../../Domain/Entities/AuthEntity';
import UsernameInput from '../Components/UsernameInput';
import { getInfo } from '../../../../common/Domain/Repositories/GetInfoRepo';

const LogIn = () => {
  const [post, setPost] = useState<AuthResponse>();
  const [isErrorShown, setErrorVisivility] = useState(false);
  const [username, setUsername] = useInputState('');
  const [password, setPassword] = useInputState('');

  return (
    <>
      <Stack align="center">
        <h2>ログイン</h2>

        <Stack w={300} spacing={15}>
          <UsernameInput username={username} setUsername={setUsername} />

          <PasswordInputWithNotes password={password} setPassword={setPassword} />

          <Space mt="md" />

          <Button
            onClick={() => {
              logIn({
                username: 'b',
                password: 'b',
                completion: (data) => {
                  console.log(data);

                  getInfo((userData) => {
                    console.log(userData);
                  });
                },
              });
              // logout((data) => {
              //   console.log(data);
              // });
            }}
          >
            ログイン
          </Button>
        </Stack>

        <p>{post?.status_code ?? 'FAIL'}</p>
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
