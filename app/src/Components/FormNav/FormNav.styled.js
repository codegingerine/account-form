import styled, { css } from "styled-components";

export const NavItemStyled = styled.div`
  width: 100px;
  padding: 8px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background: #f9f9fb;
    opacity: 0.25;
    transition: all .3s ease;
  }
`;

const ItemMix = css`
  display: block;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const ItemNoStyled = styled.span`
  ${ItemMix}
`;

export const ItemNameStyled = styled.span`
  ${ItemMix}
`;
