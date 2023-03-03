import { Alert, Button, Checkbox, Flex, Overlay, Space, Stack, Text } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import EmailInput from "../Components/EmailInput";
import { PasswordInputWithNotes } from "../Components/PasswordInputWithNotes";
import { logIn } from "../../Domain/Repositories/AuthRepo";
import { useState } from "react";
import { AuthResponse } from "../../Domain/Entities/AuthEntity";
import { IconAlertCircle } from "@tabler/icons-react";

const LogIn = () => {
  const [post, setPost] = useState<AuthResponse>();
  const [isErrorShown, setErrorVisivility] = useState(false);
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");

  return (
    <>
      <Stack align="center">
        <h2>ログイン</h2>

        <Stack w={300} spacing={15}>
          <EmailInput email={email} setEmail={setEmail} />

          <PasswordInputWithNotes password={password} setPassword={setPassword} />

          <Space mt="md" />

          <Button onClick={() => {
            console.log(email);
            console.log(password);

            logIn({
              username: email,
              password: password,
              completion: setPost
            })
          }}>Submit</Button>
        </Stack>

        <p>{post?.status_code ?? "FAIL"}</p>
      </Stack>

      {isErrorShown && <Overlay center style={{ position: "fixed" }} onClick={() => setErrorVisivility(false)}>
        <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red" radius="lg" withCloseButton onClose={() => setErrorVisivility(false)}>
          全項目を正しく入力してください。
        </Alert>
      </Overlay>}
    </>
  );
}

export default LogIn;
