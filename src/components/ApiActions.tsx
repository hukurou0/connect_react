import { useEffect, useState } from 'react';
import { LogInResponse } from '../../types';
import { logIn } from '../api/logIn';

const ApiFetch = () => {
  const [post, setPost] = useState<LogInResponse>();

  useEffect(() => {
    logIn(setPost);
  }, []);

  return (
    <div>{post?.status_code ?? "FAIL"}</div>
  );
}

export default ApiFetch;