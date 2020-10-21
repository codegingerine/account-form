import React from "react";
import {
  CheckboxWrapperStyled,
  CheckboxStyled,
  LabelStyled,
} from "./Checkbox.styled";

const Checkbox = ({ className, label, name, id, value, onChange, checked }) => {
  return (
    <CheckboxWrapperStyled className={className} checked={checked}>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <CheckboxStyled
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </CheckboxWrapperStyled>
  );
};

export default Checkbox;
