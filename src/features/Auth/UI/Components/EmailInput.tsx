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
      error={isVailed ? null : "Invailed email"}
      label="Email"
      placeholder="your@email.com"
      value={email}
      onChange={setEmail}
    />
  );
}

export default EmailInput;