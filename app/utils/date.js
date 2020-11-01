export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = (range) =>
  [...Array(range)].map((_, i) => ("0" + (i + 1)).slice(-2));

const endYear = new Date().getFullYear();
const yearsRange = (startYear) => parseInt(endYear - startYear);
export const years = (startYear) =>
  [...Array(yearsRange(startYear) + 1)].map((_, i) => endYear - i);

export const daysLength = (month, months, year) => {
  return month === months[3 || 5 || 8 || 10]
    ? 30
    : month === months[1] && year % 4 !== 0
    ? 28
    : month === months[1] && year % 4 === 0
    ? 29
    : 31;
};
