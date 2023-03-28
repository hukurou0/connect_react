import { Stack } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import PrivacyPolicyMD from '../../common/Assets/PrivacyPolicy.md';

export const PrivacyPolicy = () => {
  const [postMarkdown, setPostMarkdown] = useState('');

  useEffect(() => {
    fetch(PrivacyPolicyMD)
      .then((response) => response.text())
      .then((text) => {
        setPostMarkdown(text);
      });
  }, []);

  return (
    <Stack maw={800} w="100%" align="center">
      <ReactMarkdown>{postMarkdown}</ReactMarkdown>
    </Stack>
  );
};
