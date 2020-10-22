import React from "react";
import {
  FormNavSectionStyled,
  FormNavStyled
} from "./FormNavSection.styled";

const FormNavSection = ({ className, itemNo, itemName, children  }) => {
  return (
    <FormNavSectionStyled className={className}>
      {children}
      {itemNo && <FormNavStyled itemNo={itemNo} itemName={itemName} />}
    </FormNavSectionStyled>
  );
};

export default FormNavSection;