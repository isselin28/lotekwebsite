import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => padding}px;
  margin: ${({ margin }) => margin}px;
  gap: ${({ gap }) => gap}px;
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      min-height: 110vh;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100vw;
    `};
`;
