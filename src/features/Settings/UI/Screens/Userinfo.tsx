import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchDepartments } from "../../../../common/Domain/Repositories/DepartmentRepo";
import { departmentsState } from "../../../../common/Hooks/DepartmentsState";
import { useRecoilState } from "recoil";
import { Button, Text, Flex } from "@mantine/core";

const Userinfo = () => {
    const [departments, setDepartments] = useRecoilState(departmentsState);

    useEffect(() => {
        fetchDepartments(setDepartments);
    }, []);

    useEffect(() => {
        console.log(departments);
    }, [departments]);

    return (
        <Stack align="center">
            <h2>Userinfo</h2>
            <Stack w={300} spacing={15}>
                <Flex justify="space-between" align="center">
                    <Text>ユーザー名</Text>
                    <Text>info</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text>メールアドレス</Text>
                    <Text>info</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text>学部</Text>
                    <Text>info</Text>
                </Flex>
                <Text>パスワード変更</Text>
                <Button>個人情報</Button>
            </Stack>
        </Stack>
    );
};

export default Userinfo;
