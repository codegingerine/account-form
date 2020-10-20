import styled, { css } from "styled-components";
import { media } from "Utils/media";

export const FieldBoxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${media.tablet`
    margin-bottom: 24px;
  `}
`;

const PadMix = css`
  padding-left: 18px;
  padding-right: 18px;

  ${media.tablet`
    padding-left: 14px;
    padding-right: 14px;
  `}
`;

export const LabelStyled = styled.label`
  display: block;  
  font-size: 11px;
  line-height: 11px;
  color: #333333;
  ${PadMix}
`;

export const ErrorMessageStyled = styled.span`
  display: block;
  font-size: 11px;
  line-height: 11px;
  color: #EB5757;
  margin-top: 5px;
  ${PadMix}
`;

