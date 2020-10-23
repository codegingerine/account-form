import React, { useEffect, useState } from "react";
import useWindowWidth from "Utils/use-window-width";

import { DatePickerStyled, SelectStyled } from "./DatePicker.styled";

const TABLET_SIZE = 992;
const days = [...Array(31)].map((_, i) => ("0" + (i + 1)).slice(-2));
const months = [
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
const monthsByIndex = months.map((month, _) => ("0" + (months.indexOf(month) + 1)).slice(-2));

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
  let windowWidth = useWindowWidth();
  console.log("render");

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
        options={windowWidth >= TABLET_SIZE ? months : monthsByIndex}
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
