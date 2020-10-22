import React, { useEffect, useState } from "react";
import { DatePickerStyled, SelectStyled } from "./DatePicker.styled";

const TABLET_SIZE = 992;
const days = [...Array(31)].map((_, i) => ("0" + (i + 1)).slice(-2));
const months = [
  { name: "January", number: 1 },
  { name: "February", number: 2 },
  { name: "March", number: 3 },
  { name: "April", number: 4 },
  { name: "May", number: 5 },
  { name: "June", number: 6 },
  { name: "July", number: 7 },
  { name: "August", number: 8 },
  { name: "September", number: 9 },
  { name: "October", number: 10 },
  { name: "November", number: 11 },
  { name: "December", number: 12 },
];
const monthsByName = months.map((_, month) => months[month].name);
const monthsByNumber = months.map((_, month) => months[month].number);

const startYear = 1920;
const endYear = new Date().getFullYear();
const yearsRange = parseInt(endYear - startYear);
let years = [...Array(yearsRange + 1)].map((_, i) => endYear - i);

const DatePicker = ({
  className,
  dayValue,
  monthValue,
  yearValue,
  onChangeDay,
  onChangeMonth,
  onChangeYear,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <DatePickerStyled className={className}>
      <SelectStyled
        name="day"
        value={dayValue}
        onChange={onChangeDay}
        options={days}
        fullBorder
        removeIcon
      />
      <SelectStyled
        name="month"
        value={monthValue}
        onChange={onChangeMonth}
        options={windowWidth >= TABLET_SIZE ? monthsByName : monthsByNumber}
        fullBorder
      />
      <SelectStyled
        name="year"
        value={yearValue}
        onChange={onChangeYear}
        options={years}
        fullBorder
        removeIcon
      />
    </DatePickerStyled>
  );
};

export default DatePicker;
