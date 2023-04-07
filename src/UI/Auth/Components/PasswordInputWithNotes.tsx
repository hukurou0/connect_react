import { Box, Progress, PasswordInput, Group, Text, Center } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

const PasswordRequirement = ({ meets, label }: { meets: boolean; label: string }) => (
  <Text color={meets ? 'teal' : 'red'} mt={5} size="sm">
    <Center inline>
      {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
      <Box ml={7}>{label}</Box>
    </Center>
  </Text>
);

const requirements = [
  { re: /[0-9]/, label: '数字を含んでください' },
  { re: /[a-z]/, label: '小文字を含んでください' },
  { re: /[A-Z]/, label: '大文字を含んでください' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

interface Params {
  password: string;
  setPassword: (value: string | React.ChangeEvent<any> | null | undefined) => void;
}

export const PasswordInputWithNotes = ({ password, setPassword }: Params) => {
  const strength = getStrength(password);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(password)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: '0ms' } }}
        value={password.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0}
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  return (
    <div>
      <PasswordInput
        withAsterisk
        size="md"
        radius="lg"
        value={password}
        onChange={setPassword}
        placeholder="パスワード"
        label="パスワード"
        required
      />

      <Group spacing={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement label="パスワードは6文字以上で設定してください" meets={password.length > 5} />
      {checks}
    </div>
  );
};
