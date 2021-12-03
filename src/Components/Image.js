import styled, { css } from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `}
`;
