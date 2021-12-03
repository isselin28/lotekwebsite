import styled from "styled-components";

export const Button = styled.div`
  color: ${(props) => (props.primary ? "white" : "#2F2E2E")};
  background-color: ${(props) => (props.primary ? "#94703a" : "white")};
  border-radius: 3px;

  padding: 4px 16px;
  font-size: 14px;
  letter-spacing: 0.8px;

  display: flex;
  align-items: center;
  justify-content: center;

  :active,
  :hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) => (props.primary ? "#b98d4b" : "#b98d4b")};
  }
`;
