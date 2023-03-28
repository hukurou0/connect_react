import { Anchor, Divider, Stack, Title, Text } from '@mantine/core';

export const Credits = () => (
  <Stack maw={800} w="100%" align="center">
    <Title>クレジット</Title>
    <Divider w="100%" />
    <Text>
      Icons used in this app are made by
      <Anchor href="https://www.flaticon.com/authors/freepik" style={{paddingLeft: '1ch'}} title="Freepik - Flaticon">
        Freepik - Flaticon
      </Anchor>
    </Text>
  </Stack>
);
