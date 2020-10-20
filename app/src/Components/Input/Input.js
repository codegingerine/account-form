import React from "react";
import PropTypes from "prop-types";
import { InputStyled } from "./Input.styled";

const Input = ({ className, type, name, id, value, onChange, hasError }) => (
  <InputStyled
    className={className}
    type={type}
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    hasError={hasError}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

export default Input;
