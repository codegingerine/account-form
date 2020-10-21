import styled from "styled-components";
import { ReactComponent as Arrow } from "Assets/svg/arrow.svg";

export const CaretWrapperStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50px;
  background: ${({ caretBgColor }) => caretBgColor || `#7841F4`};
  box-shadow: 0px 23px 24px rgba(13, 13, 31, 0.08);
`;

export const CaretStyled = styled(Arrow)`
  height: 13px;
  width: 20px;
`;

export const ButtonStyled = styled.button`
  position: relative;
  height: ${({ height }) => height || `51px`};
  width: ${({ width }) => width || `150px`};
  padding: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${({ bgColor }) =>
    bgColor || `linear-gradient(90deg, #8658eb -0.42%, #652ae6 100.42%)`};
  padding: 10px 50px 10px 10px;
  box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);
  border: 0;
`;
