import {
    Stack,
    Input,
    Button,
    Flex,
    Select,
    UnstyledButton,
    Menu,
    Text,
} from "@mantine/core";
import {
    BASEURL,
    GET_SUBJECTS,
    CHECK,
    DUPLICATION,
    NEW,
} from "../../../../lib/constants/urls";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { DateInput } from "@mantine/dates";
import { useRecoilState } from "recoil";
import { SubjectPicker } from "../../components/SubjectPicker";
import { fetchSubject } from "../../../../common/Domain/Repositories/SubjectRepo";
import { subjectState } from "../../../../common/Hooks/SubjectState";
import { SubjectData } from "../../../../common/Domain/Entities/SubjectEntity";

const TaskRegist = () => {
    interface CheckTaskParmas {
        subject_id: number;
        deadline_year: number;
        deadline_month: number;
        deadline_day: number;
    }

    const checktask = ({
        subject_id,
        deadline_year,
        deadline_month,
        deadline_day,
    }: CheckTaskParmas) => {
        axios
            .post(BASEURL + CHECK, {
                data: {
                    subject_id: subject_id,
                    deadline_year: deadline_year,
                    deadline_month: deadline_month,
                    deadline_day: deadline_day,
                },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    checktask({
        subject_id: 1,
        deadline_year: 2023,
        deadline_month: 1,
        deadline_day: 1,
    });

    /* console.log(subject); */
    //console.log(subject?.map((a) => a.name));

    /*   const [deadline_year, setDeadlineYear] = useState("");
    const setDdyear = (e: any) => {
        setDeadlineYear(e.target.value);
    };
    const [deadline_month, setDeadlineMonth] = useState<number | "">(0);
    const setDdmonth = (e: any) => {
        setDeadlineMonth(e.target.value);
    };
    const [value, setValue] = useState<Date | null>(null); */

    /* console.log(deadline_year); */
    const [selectedSubject, setSelection] = useState<SubjectData | undefined>(
        undefined
    );
    const [subjects, setSubject] = useRecoilState(subjectState);
    useEffect(() => {
        fetchSubject(setSubject);
    }, []);

    return (
        <Stack align="center">
            <h2>TaskRegist</h2>
            checktask
            <Flex justify="space-around" align="center">
                <Text>科目</Text>
                <SubjectPicker
                    selectedSubject={selectedSubject}
                    setSelection={setSelection}
                />
            </Flex>
            {/* <Flex>
                <form>
                    <Select data={[{value:}]}></Select>
                    <Input
                        value={deadline_year}
                        onChange={setDdyear}
                        placeholder="Date input"
                        maw={400}
                        mx="auto"
                    />
                    <Button
                        onClick={() => {
                            checktask();
                        }}
                    ></Button>
                </form>
            </Flex> */}
        </Stack>
    );
};

export default TaskRegist;