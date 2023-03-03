import { Alert, Button, Checkbox, Flex, Overlay, Space, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { useInputState } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
import { AuthResponse } from '../../Domain/Entities/AuthEntity';
import { DepartmentData } from '../../Domain/Entities/DepartmentEntity';
import EmailInput from '../Components/EmailInput';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import { DepartmentPicker } from '../Components/DepartmentPicker';
import isVailed from '../../../../lib/helpers/validation';
import { signUp } from '../../Repositories/AuthRepo';

const SignUp = () => {
  const [post, setPost] = useState<AuthResponse>();

  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);
  const [isChecked, setCheckStatus] = useInputState(false);
  const [isErrorShown, setErrorVisivility] = useState(false);

  return (
    <>
      <Stack align="center">
        <h2>Sign Up</h2>

        <Stack w={300} spacing={15}>
          <EmailInput email={email} setEmail={setEmail} />

          <PasswordInputWithNotes password={password} setPassword={setPassword} />

          <Space mt="md" />

          <Flex justify="space-between" align="center">
            <Text>学部</Text>
            <DepartmentPicker selectedDepartment={selectedDepartment} setSelection={setSelection} />
          </Flex>

          <Checkbox
            checked={isChecked}
            onChange={setCheckStatus}
            mt="md"
            label="I agree to sell my privacy"
          />

          <Space mt="md" />

          <Button onClick={() => {
            console.log(selectedDepartment);
            console.log(email);
            console.log(password);

            const isVailedInputs = isVailed(email, password, selectedDepartment);

            if (!isVailedInputs || !isChecked) {
              setErrorVisivility(!isErrorShown);
              return;
            }

            signUp({
              username: email,
              password: password,
              department: selectedDepartment!.id, // After null checking
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

export default SignUp;
