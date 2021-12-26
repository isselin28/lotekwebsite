import styled, { css } from "styled-components";

export const Button = styled.div`
  color: ${({ theme, primary }) =>
    primary ? theme.background : theme.default};
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary.dark : theme.background};
  border-radius: 3px;

  padding: 4px 16px;
  font-size: 14px;
  letter-spacing: 0.8px;

  display: flex;
  align-items: center;
  justify-content: center;

  :active,
  :hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        cursor: pointer;
        color: white;
        background-color: ${({ theme }) => theme.primary.light};
      `}
  }
`;
