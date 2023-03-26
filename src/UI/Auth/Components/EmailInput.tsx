import { TextInput } from '@mantine/core';
import { EMAIL_REGEX } from '../../../lib/constants/regex';

interface Params {
  email: string;
  setEmail: (value: string | React.ChangeEvent<any> | null | undefined) => void;
}

const EmailInput = ({ email, setEmail }: Params) => {
  const isVailed = email.length === 0 ? true : EMAIL_REGEX.test(email);

  return (
    <TextInput
      size='md'
      radius='lg'
      error={isVailed ? null : '無効なアドレスです'}
      label="メールアドレス (任意)"
      placeholder="your@email.com"
      value={email}
      onChange={setEmail}
    />
  );
};

export default EmailInput;
