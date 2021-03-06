import styled, { css } from "styled-components";
import { media } from "Utils/media";
import Select from "Components/Select";
import { OptionStyled } from "Components/Select/Select.styled";

export const DatePickerStyled = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const SelectMix = css`
  &:first-child {
    ${media.tablet` width: 50px; `}
  }

  &:nth-child(2) {
    ${media.tablet` width: 134px; `}
  }

  &:last-child {
    width: 114px;
    ${media.tablet` width: 144px; `}
  }

  ${media.tablet`
    &:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        width: 11px;
        height: 2px;
        top: 24px;
        right: -18px;
        background: #a2a2af;
        opacity: 0.25;
        z-index: 1;
      }
    }
  `};
`;

export const SelectStyled = styled(Select)`
  ${SelectMix}
`;

export const OptionSourceStyled = styled(OptionStyled)``;
