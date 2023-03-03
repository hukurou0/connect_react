import { TextInput } from '@mantine/core';

interface Params {
  email: string,
  setEmail: (value: string | React.ChangeEvent<any> | null | undefined) => void
}

const EmailInput = ({ email, setEmail }: Params) => {
  const isVailed = /^\S+@\S+.\S+$/.test(email);

  return (
    <TextInput
      withAsterisk
      required
      error={isVailed ? null : "無効なアドレスです"}
      label="メールアドレス"
      placeholder="your@email.com"
      value={email}
      onChange={setEmail}
    />
  );
}

export default EmailInput;