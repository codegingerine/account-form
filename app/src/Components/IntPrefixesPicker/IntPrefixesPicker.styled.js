import styled, { css } from "styled-components";
import { media } from "Utils/media";

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
  position: relative;
  width: 114px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #202020;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #dadaed;
  ${InputPadMix}
  ${PadMix}
  outline: none;
  margin-bottom: 30px;

  ${media.tablet`
    margin-bottom: 24px;
  `}

  &::-ms-expand {
    display: none;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const OptionStyled = styled.option`
  font-size: 14px;
`;
