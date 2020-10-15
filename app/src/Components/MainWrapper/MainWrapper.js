import React from "react";
import PropTypes from "prop-types";
import { MainStyled, MainTitle } from "./MainWrapper.styled";

const MainWrapper = ({ title, children }) => {
  return (
    <MainStyled>
      <MainTitle>{title}</MainTitle>
      {children}
    </MainStyled>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired
};

export default MainWrapper;
