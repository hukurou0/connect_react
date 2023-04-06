import { Button, Checkbox, Flex, Space, Stack, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useInputState } from '@mantine/hooks';
import { useRecoilState } from 'recoil';
import { DepartmentData } from '../../../Domain/Entities/DepartmentEntity';
import EmailInput from '../Components/EmailInput';
import { PasswordInputWithNotes } from '../Components/PasswordInputWithNotes';
import isVailed from '../../../lib/helpers/validation';
import UsernameInput from '../Components/UsernameInput';
import DepartmentService from '../../../Services/DepartmentServices';
import AuthService from '../../../Services/AuthService';
import UserDataService from '../../../Services/UserDataService';
import { DepartmentPicker } from '../../../common/UI/Components/DepartmentPicker';
import { alertContentState } from '../../../Hooks/AlertContentState';
import { alertPresentationState } from '../../../Hooks/AlertPresentationState';
import { CustomAlert } from '../../../common/UI/Components/CustomAlert';

const SignUp = () => {
  const { onSignUp } = AuthService();
  const { setUserData } = UserDataService();
  const { getAndSetDepartments } = DepartmentService();

  const [username, setUsername] = useInputState('');
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);
  const [isChecked, setCheckStatus] = useInputState(false);
  const [isErrorShown, setErrorVisivility] = useRecoilState(alertPresentationState);
  const [alertContent, setAlertContent] = useRecoilState(alertContentState);

  useEffect(() => {
    (async () => {
      await getAndSetDepartments();
    })();
  }, []);

  return (
    <Stack maw={500} w="100%" align="center">
      <Stack align="center" w="100%">
        <Title order={2}>登録</Title>

        <Stack w="90%" align="stretch">
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
            label="プライバーポリシーと利用規約に同意する"
          />

          <Space mt="md" />

          <Button
            size="md"
            radius="lg"
            onClick={async () => {
              const isVailedInputs = isVailed(false, username, password, selectedDepartment);

              if (!isVailedInputs || !isChecked) {
                setErrorVisivility(!isErrorShown);
                setAlertContent({ title: 'エラー', message: '入力されていない項目があります。' });
                return;
              }

              await onSignUp(username, password, selectedDepartment!.id);
              await setUserData();
            }}
          >
            登録
          </Button>
        </Stack>
      </Stack>

      {isErrorShown && <CustomAlert content={alertContent} setErrorVisivility={setErrorVisivility} />}
    </Stack>
  );
};

export default SignUp;
