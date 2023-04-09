import { Button, Checkbox, Flex, Space, Stack, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [usernameInput, setUsername] = useInputState('');
  const [emailInput, setEmail] = useInputState('');
  const [passwordInput, setPassword] = useInputState('');
  const [selectedDepartment, setSelection] = useState<DepartmentData | undefined>(undefined);
  const [isChecked, setCheckStatus] = useInputState(false);
  const [isErrorShown, setErrorVisivility] = useRecoilState(alertPresentationState);
  const [alertContent, setAlertContent] = useRecoilState(alertContentState);
  const navigate = useNavigate();

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
          <UsernameInput username={usernameInput} setUsername={setUsername} />

          <EmailInput email={emailInput} setEmail={setEmail} />

          <PasswordInputWithNotes password={passwordInput} setPassword={setPassword} />

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
              if (usernameInput.length === 0 || passwordInput.length === 0) {
                setErrorVisivility(!isErrorShown);
                setAlertContent({ title: 'エラー', message: '入力されていない項目があります。' });
                return;
              }

              const isVailedInputs = isVailed(false, usernameInput, passwordInput, selectedDepartment);

              if (!isVailedInputs || !isChecked) {
                setErrorVisivility(!isErrorShown);
                setAlertContent({ title: 'エラー', message: 'すべての項目を正しく入力してください。' });
                return;
              }

              await onSignUp(usernameInput, passwordInput, selectedDepartment!.id);
              await setUserData();

              navigate('/introduction');
            }}
          >
            登録
          </Button>

          <Text>登録後は機能紹介ページに移動します。<br />ログインボタンがありますので、再度ログインをお願いします。</Text>
        </Stack>
      </Stack>

      {isErrorShown && <CustomAlert content={alertContent} setErrorVisivility={setErrorVisivility} />}
    </Stack>
  );
};

export default SignUp;
