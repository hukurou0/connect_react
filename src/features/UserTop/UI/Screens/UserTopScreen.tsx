import { Stack, Flex, Text, Card } from "@mantine/core";
import { Link } from "react-router-dom";

const UserTop = () => {
    return (
        <Stack align="center">
            <Stack>
                <Flex bg="#B2E8FF" direction="column" h={300} w={300}>
                    <Text component={Link} to="tasktimetable" bg="blue">
                        時間割
                    </Text>
                    <div>dispaly </div>
                </Flex>
                <Flex bg="#B2E8FF" direction="column" h={300} w={300}>
                    <Text component={Link} to="taskregist" bg="blue">
                        課題管理
                    </Text>
                    <div>dispaly </div>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default UserTop;
