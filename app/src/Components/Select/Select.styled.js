import styled, { css } from "styled-components";
import { media } from "Utils/media";
import icon from "Assets/svg/dropdown_arrow.svg";

const InputPadMix = css`
  padding-top: 10px;
  padding-bottom: 8px;
`;

const PadMix = css`
  padding-left: 18px;
  padding-right: 18px;

  ${media.tablet`
    padding-left: 14px;
    padding-right: 14px;
  `}
`;

export const SelectStyled = styled.select`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #202020;
  background: transparent;
  border: 0;
  ${InputPadMix}
  ${PadMix}
  outline: none;

  &::-ms-expand {
    display: none;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SelectWrapperStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 114px;

  &:before {
    content: "";
    position: absolute;
    width: 11px;
    height: 7px;
    top: 15px;
    right: 10px;
    background-image: url(${icon});
    background-repeat: no-repeat;
    z-index: 1;

    ${({ removeIcon }) => removeIcon && `display: none;`}
  }

  ${({ fullBorder }) =>
    fullBorder
      ? css`
          margin-top: 12px;
          height: 53px;
          width: 53px;
          background: rgba(255, 255, 255, 0.0001);
          border: 2px solid #dadaed;

          &:before {
            top: 23px;
            right: 2px;
          }

          ${SelectStyled} {
            padding: 0 8px 0 16px;
            margin: 0;
          }
        `
      : ` ${SelectStyled} {
        border-bottom: 2px solid #dadaed;
      }`}
`;

export const OptionStyled = styled.option`
  font-size: 14px;
`;
