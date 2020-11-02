import React from "react";
import {
  CheckboxWrapperStyled,
  CheckboxStyled,
  LabelStyled,
} from "./Checkbox.styled";

const Checkbox = React.forwardRef(({ className, label, name, id, onChange, checked, value }, ref) => {
  return (
    <CheckboxWrapperStyled className={className} checked={checked}>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      <CheckboxStyled
        type="checkbox"
        id={id}
        name={name}
        value={value}
        ref={ref}
        onChange={onChange}
        checked={checked}
      />
    </CheckboxWrapperStyled>
  );
});

export default Checkbox;
