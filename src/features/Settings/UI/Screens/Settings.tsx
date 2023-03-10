import { Stack, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Settings = () => {
    return (
        <Stack align="center">
            <p>Settings</p>
            <Stack w={300} spacing={15}>
                <Text>Account</Text>
                <Button sx={{}} component={Link} to="userinfo">
                    個人情報
                </Button>
                <Text>Informatin</Text>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Text>Actions</Text>
                <Button></Button>
                <Button></Button>
            </Stack>
        </Stack>
    );
};

export default Settings;
