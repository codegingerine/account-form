import styled, { css } from "styled-components";
import FieldBox from "Components/FieldBox";
import IntPrefixesPicker from "Components/IntPrefixesPicker";

export const PhoneBoxStyled = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PhoneFieldBoxStyled = styled(FieldBox)`
  flex-shrink: 1;
  margin-left: 19px;
`;

export const IntPrefixesPickerStyled = styled(IntPrefixesPicker)`
  flex-shrink: 0;
`;