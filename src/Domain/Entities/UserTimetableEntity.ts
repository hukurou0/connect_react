import { APIError } from './ApiBaseModel';

export type UserTimetableResponse = {
  status_code: number;
  data: TimetableData;
  error?: APIError | undefined;
};

export type TimetableData = {
  timeTable: RoomData[];
};

export type RoomData = {
  name: string;
  room: string;
};
