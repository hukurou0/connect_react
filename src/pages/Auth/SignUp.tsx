import { Stack } from '@mantine/core';
import ApiFetch from '../../components/ApiActions';

const SignUp = () => {
  return (
    <Stack align="center">
      <p>Sign Up</p>
      <ApiFetch />
    </Stack>
  );
}

export default SignUp;
