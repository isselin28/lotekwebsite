import styled from "styled-components";
import { Icon } from "../Icon";

export const RoundButton = styled.div`
  color: ${({ theme }) => theme.primary.dark};
  background-color: ${({ theme }) => theme.background};
  box-shadow: 1px 2px 4px #c6c6c6;

  border: 1.5px solid ${({ theme }) => theme.primary.dark};
  border-radius: 50%;
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 4px;
  margin: 4px;

  :active,
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.primary.light};
    border: 1.5px solid ${({ theme }) => theme.primary.light};
  }

  :active,
  :hover ${Icon} {
    cursor: pointer;
    color: white;
  }
`;
