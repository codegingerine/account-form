import styled from "styled-components";
import { media } from "Utils/media";
import FormNav from "Components/FormNav";

export const FormNavStyled = styled(FormNav)`
  display: none;
  position: absolute;
  top: 0;
  right: -151px;
  }

  ${media.tablet` display block; `}
`;

export const FormNavSectionStyled = styled.div`
  position: relative;
  width: 100%;

  &:not(:first-of-type) {
    padding-top: 30px;
  }
  ${media.tablet`
    padding-top: 24px;
  `}

  :hover {
    ${FormNavStyled} {
    &:before {
      background: #1bfec0;
      opacity: 1;
    }
  }
`;
