import React from "react";
import PropTypes from "prop-types";
import {
  StepStyled,
  StepContentStyled,
  TitleStyled,
  FormBoxStyled,
  FormIntroStyled,
  ImageBoxStyled,
} from "./StepBox.styled";

const StepBox = ({ title, imgSrc, description, children, formBarColor, className }) => {
  return (
    <StepStyled className={className}>
      <TitleStyled>{title}</TitleStyled>
      <StepContentStyled>
        <ImageBoxStyled imgSrc={imgSrc} />
        <FormBoxStyled formBarColor={formBarColor}>
          <FormIntroStyled>{description}</FormIntroStyled>
          {children}
        </FormBoxStyled>
      </StepContentStyled>
    </StepStyled>
  );
};

StepBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  formBarColor: PropTypes.string,
  className: PropTypes.string,
};

export default StepBox;
