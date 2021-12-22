import styled, { css } from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ responsive, width, height }) =>
    responsive &&
    css`
      width: 100%;
      height: auto;
      max-width: ${width}px;
      max-height: ${height}px;
    `}
`;
