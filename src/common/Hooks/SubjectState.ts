import { atom } from "recoil";
import { SubjectData } from "../Domain/Entities/SubjectEntity";

export const subjectState = atom<SubjectData[]>({
    key: "subjectState",
    default: [],
});