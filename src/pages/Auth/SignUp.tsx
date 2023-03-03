import { Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { AuthResponse } from '../../../types';
import { signUp } from '../../api/signUp';

const SignUp = () => {
  const [post, setPost] = useState<AuthResponse>();

  useEffect(() => {
    signUp({
      username: "aaaa", 
      password: "aaaa", 
      department: 2, 
      completion: setPost});
  }, []);

  return (
    <Stack align="center">
      <p>Sign Up</p>
      <p>{post?.status_code ?? "FAIL"}</p>
    </Stack>
  );
}

export default SignUp;
