import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {
  SelectWrapperStyled,
  SelectStyled,
  OptionStyled,
} from "./Select.styled";

const Options = ({ options, value }) => (
  <>
    {options.map((option) => {
      return (
        <OptionStyled key={uuidv4()} value={value}>
          {option}
        </OptionStyled>
      );
    })}
  </>
);

const Select = React.forwardRef(
  (
    {
      className,
      name,
      value,
      onChange,
      options,
      children,
      fullBorder,
      removeIcon,
    },
    ref
  ) => {
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
          ref={ref}
        >
          {children ? children : <Options options={options} />}
        </SelectStyled>
      </SelectWrapperStyled>
    );
  }
);

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  children: PropTypes.any,
  bottomBorder: PropTypes.string,
  fullBorder: PropTypes.bool,
  removeIcon: PropTypes.bool,
};

export default Select;
