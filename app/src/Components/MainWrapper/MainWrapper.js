import React from "react";
import PropTypes from "prop-types";
import { MainStyled } from "./MainWrapper.styled";

const MainWrapper = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};

MainWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainWrapper;
