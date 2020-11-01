import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useWindowWidth from "Utils/use-window-width";
import { days, months, years, daysLength } from "Utils/date";
import {
  DatePickerStyled,
  SelectStyled,
  OptionSourceStyled,
} from "./DatePicker.styled";

const TABLET_SIZE = 992;

const DatePicker = React.forwardRef(
  ({ className, dayValue, monthValue, yearValue }, ref) => {
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState(months[0]);
    const [year, setYear] = useState("1920");
    const [daysRange, setDaysRange] = useState();
    const windowWidth = useWindowWidth();
    const getDaysLength = daysLength(month, months, year);
    // console.log("render");

    useEffect(() => {
      setDaysRange(getDaysLength);
    });

    const handleDay = (e) => {
      setDay(e.target.value);
    };

    const handleMonth = (e) => {
      setMonth(e.target.value);
    };

    const handleYear = (e) => {
      setYear(e.target.value);
    };

    return (
      <DatePickerStyled className={className}>
        <SelectStyled
          name="day"
          value={day}
          ref={dayValue}
          onChange={handleDay}
          options={days(daysRange)}
          fullBorder
          removeIcon
        />
        <SelectStyled
          name="month"
          value={month}
          ref={monthValue}
          onChange={handleMonth}
          fullBorder
        >
          <>
            {months.map((item, i) => {
              return (
                <OptionSourceStyled key={uuidv4()} value={item}>
                  {windowWidth >= TABLET_SIZE
                    ? item
                    : ("0" + (i + 1)).slice(-2)}
                </OptionSourceStyled>
              );
            })}
          </>
        </SelectStyled>
        <SelectStyled
          name="year"
          value={year}
          ref={yearValue}
          onChange={handleYear}
          options={years("1920")}
          fullBorder
          removeIcon
        />
      </DatePickerStyled>
    );
  }
);

export default DatePicker;
