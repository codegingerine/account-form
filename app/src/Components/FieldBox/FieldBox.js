import React from "react";
import PropTypes from "prop-types";
import Input from "Components/Input";
import {
  FieldBoxStyled,
  LabelStyled,
  ErrorMessageStyled,
} from "./FieldBox.styled";

const FieldBox = ({
  className,
  type,
  name,
  id,
  value,
  onChange,
  hasError,
  errorMsg,
  label,
  children,
}) => {
  return (
    <FieldBoxStyled className={className}>
      {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
      {children ? children : 
        <Input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          hasError={hasError}
        />
      }
      {hasError && <ErrorMessageStyled>{errorMsg}</ErrorMessageStyled>}
    </FieldBoxStyled>
  );
};

FieldBox.propTypes = {
  className: PropTypes.string,
  errorMsg: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
};

export default FieldBox;
