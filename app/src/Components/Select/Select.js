import React from "react";
import PropTypes from "prop-types";
import { SelectStyled, OptionStyled } from "./Select.styled";

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
}) => {
  return (
    <SelectStyled
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children ? children : <Options options={options} />}
    </SelectStyled>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  children: PropTypes.any
};

export default Select;
