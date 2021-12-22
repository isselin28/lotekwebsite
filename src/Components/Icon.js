import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.primary.dark};
  font-size: ${(props) => props.fontSize}px;
  padding: 4px;
`;
