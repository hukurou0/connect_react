import { Alert, Button, Checkbox, Flex, Overlay, Space, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useInputState } from '@mantine/hooks';
import { IconAlertCircle } from '@tabler/icons-react';
import { AuthResponse } from '../../Domain/Entities/AuthEntity';
import { DepartmentData } from '../../../../common/Domain/Entities/DepartmentEntity';
import EmailInput from '../Components/EmailInput';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import { DepartmentPicker } from '../Components/DepartmentPicker';
import isVailed from '../../../../lib/helpers/validation';
import { signUp } from '../../Domain/Repositories/AuthRepo';
import { fetchDepartments } from '../../../../common/Domain/Repositories/DepartmentRepo';
import { useRecoilState } from 'recoil';
import { departmentsState } from '../../../../common/Hooks/DepartmentsState';
import UsernameInput from '../Components/UsernameInput';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // Navigator
  const navigate = useNavigate();

  const [post, setPost] = useState<AuthResponse>();

  const [username, setUsername] = useInputState("");
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);
  const [departments, setDepartments] = useRecoilState(departmentsState);
  const [isChecked, setCheckStatus] = useInputState(false);
  const [isErrorShown, setErrorVisivility] = useState(false);

  useEffect(() => {
    fetchDepartments(setDepartments);
  }, []);

  return (
    <>
      <Stack align="center">
        <h2>登録</h2>

        <Stack w={300} spacing={15}>
          <UsernameInput username={username} setUsername={setUsername} />

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
            label="プライバーポリシーに同意する"
          />

          <Space mt="md" />

          <Button onClick={() => {
            // This is for test.
            navigate('/user');
            return;

            console.log(selectedDepartment);
            console.log(username);
            console.log(password);

            const isVailedInputs = isVailed(username, password, selectedDepartment);

            if (!isVailedInputs || !isChecked) {
              setErrorVisivility(!isErrorShown);
              return;
            }

            signUp({
              username: username,
              password: password,
              department: selectedDepartment!.id, // After null checking
              completion: (data) => {
                setPost(data);
                if (post?.status_code === 201) {
                  navigate('/user');
                }
              }
            })
          }}>登録</Button>
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
