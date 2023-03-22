import axios from 'axios';
import { BASEURL, CHECK } from '../../lib/constants/urls';

interface CheckTaskParmas {
  subject_id: number;
  deadline_year: number;
  deadline_month: number;
  deadline_day: number;
}

export const checktask = ({ subject_id, deadline_year, deadline_month, deadline_day }: CheckTaskParmas) => {
  axios
    .post(BASEURL + CHECK, {
      data: {
        subject_id,
        deadline_year,
        deadline_month,
        deadline_day,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
