import { Overlay, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { AlertContent } from '../../../Domain/Entities/AlertContentEntity';

interface CustomAlertProps {
  content: AlertContent;
  setErrorVisivility: (valOrUpdater: boolean | ((currVal: boolean) => boolean)) => void;
}

export const CustomAlert = ({ content, setErrorVisivility }: CustomAlertProps) => (
  <Overlay center w="100%" style={{ position: 'fixed' }} onClick={() => setErrorVisivility(false)}>
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title={content.title}
      color="red"
      radius="lg"
      withCloseButton
      onClose={() => setErrorVisivility(false)}
      style={{whiteSpace: "pre-wrap"}}
    >
      {content.message}
    </Alert>
  </Overlay>
);
