import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

const FooterContainer = styled(Container)`
  height: 40px;
  background-color: ${({ theme }) => theme.primary.dark};
  color: white;
`;

const Copywright = styled(Typography).attrs({ variant: "body" })`
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
`;

export function FooterSection() {
  return (
    <FooterContainer align="center" justify="center" fullWidth>
      <a
        href="https://www.linkedin.com/in/isselinmoektijono/"
        target="_blank"
        rel="noreferrer"
      >
        <Button primary>
          <Copywright>&copy; 2021 by Isselin</Copywright>
        </Button>
      </a>
    </FooterContainer>
  );
}
