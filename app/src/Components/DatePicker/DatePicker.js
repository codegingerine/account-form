import React, { useEffect, useState } from "react";
import {
  DatePickerStyled,
  SelectStyled,
  SelectMonthByNameStyled,
  SelectMonthByNoStyled
} from "./DatePicker.styled";

const days = [...Array(31)].map((_, i) => ('0' + (i + 1)).slice(-2));
const monthsByName = [
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
const monthsByNo = [...Array(12)].map((_, i) => ('0' + (i + 1)).slice(-2));
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
      <SelectMonthByNoStyled
        name="monthByNo"
        value={monthValue}
        onChange={onChangeMonth}
        options={monthsByNo}
        fullBorder
      />
      <SelectMonthByNameStyled
        name="monthByName"
        value={monthValue}
        onChange={onChangeMonth}
        options={monthsByName}
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
