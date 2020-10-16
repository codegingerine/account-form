import React from "react";
import PropTypes from "prop-types";
import { ImageBoxStyled, LinesStyled } from "./ImageBox.styled";

const ImageBox = ({ imgSrc }) => {
  return (
    <ImageBoxStyled imgSrc={imgSrc}>
      <LinesStyled />
    </ImageBoxStyled>
  );
};

ImageBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default ImageBox;
