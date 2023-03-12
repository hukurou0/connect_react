export type SubjectData = {
    name: string;
    subject_id: number;
};

export type SubjectsResponse = {
    status_code: number;
    data: SubjectData[];
};
