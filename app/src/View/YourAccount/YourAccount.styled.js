import styled from "styled-components";
import { media } from "Utils/media";
import FieldBox from "Components/FieldBox";
import IntPrefixesPicker from "Components/IntPrefixesPicker";
import Button from "Components/Button";

export const PhoneBoxStyled = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PhoneFieldBoxStyled = styled(FieldBox)`
  flex-shrink: 1;
  margin: 0 0 0 19px;
`;

export const IntPrefixesPickerStyled = styled(IntPrefixesPicker)`
  flex-shrink: 0;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  width: 230px;
  position: absolute;
  bottom: -25px;

  ${media.tablet`
    width: 237px;
    right: -50px;
  `}
`;

export const CheckboxHolderStyled = styled.div`
  display: flex;
`;
