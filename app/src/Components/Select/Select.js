import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {
  SelectWrapperStyled,
  SelectStyled,
  OptionStyled,
} from "./Select.styled";

const Options = ({ options }) => (
  <>
    {options.map((option) => {
      return <OptionStyled key={uuidv4()}>{option}</OptionStyled>;
    })}
  </>
);

const Select = ({
  className,
  name,
  value,
  onChange,
  options,
  children,
  fullBorder,
  removeIcon,
}) => {
  return (
    <SelectWrapperStyled
      className={className}
      fullBorder={fullBorder}
      removeIcon={removeIcon}
    >
      <SelectStyled
        name={name}
        value={value}
        onChange={onChange}
        fullBorder={fullBorder}
      >
        {children ? children : <Options options={options} />}
      </SelectStyled>
    </SelectWrapperStyled>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  children: PropTypes.any,
  bottomBorder: PropTypes.string,
  fullBorder: PropTypes.bool,
  removeIcon:PropTypes.bool,
};

export default Select;
