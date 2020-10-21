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

export const InputStyled = styled.input`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #202020;
  ${InputPadMix}
  ${PadMix}
  border: 0;
  border-bottom: 2px solid #dadaed;
  background: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border-color: #652ae6;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      color: #eb5757;
      border-color: #eb5757;

      &:focus {
        border-color: #eb5757;
      }
    `}
`;
