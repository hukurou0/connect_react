/* eslint-disable indent */
export const color = (difficulty: number): string => {
  switch (difficulty) {
    case 2:
      return 'blue';
    case 3:
      return 'orange';
    case 4:
      return 'red';
    default:
      return 'green';
  }
};

export const label = (difficulty: number): string => {
  switch (difficulty) {
    case 2:
      return '普通';
    case 3:
      return 'ちょいやば';
    case 4:
      return 'やばい';
    default:
      return '簡単';
  }
};
