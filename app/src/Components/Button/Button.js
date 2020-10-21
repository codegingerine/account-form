import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled, CaretWrapperStyled, CaretStyled } from "./Button.styled";

const Button = ({
  className,
  type,
  disabled,
  label,
  width,
  height,
  bgColor,
  caretBgColor,
}) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      disabled={disabled}
      width={width}
      height={height}
      bgColor={bgColor}
    >
      {label}
      <CaretWrapperStyled caretBgColor={caretBgColor}>
        <CaretStyled />
      </CaretWrapperStyled>
    </ButtonStyled>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  caretBgColor: PropTypes.string,
};

export default Button;
