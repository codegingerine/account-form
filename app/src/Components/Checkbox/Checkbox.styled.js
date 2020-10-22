import styled from "styled-components";
import { media } from "Utils/media";

export const CheckboxWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 53px;
  border: 2px solid #dadaed;
  margin-top: 10px;

  ${media.tablet`
    margin-top: 12px;
  `}


  ${({ checked }) => checked && `border-color: #1BFEC0;`}

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background: #f2f2f5;
    border: 2px solid #dadaed;

    ${({ checked }) => checked && `border-color: #1BFEC0;`}
  }
`;

export const CheckboxStyled = styled.input`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.0001);
  border: 0;
  z-index: 1;
`;

export const LabelStyled = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  color: #333333;
  padding: 6px;
`;
