import React from "react";
import PropTypes from "prop-types";
import {
  NavItemStyled,
  ItemNoStyled,
  ItemNameStyled
} from "./FormNav.styled";

const FormNav = ({ className, itemNo, itemName  }) => {
  return (
    <NavItemStyled className={className}>
      <ItemNoStyled>{itemNo}</ItemNoStyled>
      <ItemNameStyled>{itemName}</ItemNameStyled>
    </NavItemStyled>
  );
};

FormNav.propTypes = {
  className: PropTypes.string,
  itemNo: PropTypes.string.isRequired,
  itemName: PropTypes.string,
};

export default FormNav;