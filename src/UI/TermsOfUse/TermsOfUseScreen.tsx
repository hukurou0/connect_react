import { Stack } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import TermsOfUseMD from '../../common/Assets/TermsOfUse.md';

export const TermsOfUse = () => {
  const [postMarkdown, setPostMarkdown] = useState('');

  useEffect(() => {
    fetch(TermsOfUseMD)
      .then((response) => response.text())
      .then((text) => {
        setPostMarkdown(text);
      });
  }, []);

  return (
    <Stack maw={800} w="95%" align="center">
      <ReactMarkdown>{postMarkdown}</ReactMarkdown>
    </Stack>
  );
};
