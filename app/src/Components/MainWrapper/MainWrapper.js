import React from "react";
import PropTypes from "prop-types";
import { MainStyled, MainContentStyled, MainTitle } from "./MainWrapper.styled";

const MainWrapper = ({ title, children }) => {
  return (
    <MainStyled>
      <MainContentStyled>
        <MainTitle>{title}</MainTitle>
        {children}
      </MainContentStyled>
    </MainStyled>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainWrapper;
