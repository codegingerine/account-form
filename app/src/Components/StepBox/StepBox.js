import React from "react";
import PropTypes from "prop-types";
import {
  StepBoxStyled,
  FormBoxStyled,
  FormIntroStyled,
  ImageBoxStyled
} from "./StepBox.styled";

const StepBox = ({ imgSrc, description, children, formBarColor }) => {
  return (
    <StepBoxStyled>
      <ImageBoxStyled imgSrc={imgSrc} />
      <FormBoxStyled formBarColor={formBarColor}>
        <FormIntroStyled>{description}</FormIntroStyled>
        {children}
      </FormBoxStyled>
    </StepBoxStyled>
  );
};

StepBox.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  formBarColor: PropTypes.string
};

export default StepBox;
