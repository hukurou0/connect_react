import { TextInput } from '@mantine/core';
import { USERNAME_REGEX } from '../../../lib/constants/regex';

interface Params {
  username: string;
  setUsername: (value: string | React.ChangeEvent<any> | null | undefined) => void;
}

const UsernameInput = ({ username, setUsername }: Params) => {
  const isVailed = username.length === 0 ? true : USERNAME_REGEX.test(username);

  return (
    <TextInput
      withAsterisk
      required
      size='md'
      radius='lg'
      error={isVailed ? null : '無効なユーザー名です'}
      label="ユーザー名"
      placeholder="Connect Taro"
      value={username}
      onChange={setUsername}
    />
  );
};

export default UsernameInput;
