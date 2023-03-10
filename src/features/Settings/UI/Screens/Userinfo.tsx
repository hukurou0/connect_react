import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchDepartments } from "../../../../common/Domain/Repositories/DepartmentRepo";
import { departmentsState } from "../../../../common/Hooks/DepartmentsState";
import { useRecoilState } from "recoil";
import { Button, Text, Flex } from "@mantine/core";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
    BASEURL,
    MODIFY_DEPARTMENTS,
    GET_USERIFNO,
} from "../../../../lib/constants/urls";
import { DepartmentPicker } from "../../../Auth/UI/Components/DepartmentPicker";
import { DepartmentData } from "../../../../common/Domain/Entities/DepartmentEntity";

const Userinfo = () => {
    const [departments, setDepartments] = useRecoilState(departmentsState);
    const [selectedDepartment, setSelection] = useState<
        DepartmentData | undefined
    >(undefined);

    useEffect(() => {
        fetchDepartments(setDepartments);
    }, []);

    // console.log(departments);

    /* const fetchUserinfo = async () => {
        const response = axios.get(BASEURL + GET_USERIFNO);
        setUserinfo((await response).data);
    };
    useEffect(() => {
        fetchUserinfo();
    }, []); */

    type UserinfoData = {
        department: string;
        mail: string;
        username: string;
    };

    const [userinfo, setUserinfo] = useState<UserinfoData | undefined>(
        undefined
    );
    const fetchUserinfo = () => {
        axios
            .get(BASEURL + GET_USERIFNO)
            .then((response: AxiosResponse) => {
                console.log(response);
                setUserinfo(response.data.data);
            })
            .catch((error: AxiosError) => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchUserinfo();
    }, []);

    // const UserInfo = Object.entries(userinfo);
    // console.log(userinfo.data.mail);
    // console.log(userinfo);

    //console.log(UserInfo.map((info) => `${info}`));
    // console.log(departments);

    interface ModifyDepartmentParams {
        department: number;
    }

    const modifyDeparment = ({ department }: ModifyDepartmentParams) => {
        axios
            .post(BASEURL + MODIFY_DEPARTMENTS, {
                data: {
                    department: department,
                },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Stack align="center">
            <h2>Userinfo</h2>
            <Stack w={300} spacing={15}>
                <Flex justify="space-between" align="center">
                    <Text>ユーザー名</Text>
                    <Text>{userinfo?.username}</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text>メールアドレス</Text>
                    <Text>{userinfo?.mail}</Text>
                </Flex>
                <Flex justify="space-between" align="center">
                    <Text>学部</Text>
                    <Text>{userinfo?.department}</Text>
                </Flex>
                <Flex>
                    <DepartmentPicker
                        selectedDepartment={selectedDepartment}
                        setSelection={setSelection}
                    />
                    <Button
                        onClick={() =>
                            modifyDeparment({
                                department: selectedDepartment!.id,
                            })
                        }
                    >
                        変更
                    </Button>
                </Flex>
                <Text>パスワード変更</Text>
                <Button>パスワード変更</Button>
            </Stack>
        </Stack>
    );
};

export default Userinfo;
