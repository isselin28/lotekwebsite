import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import { Icon } from "../components/Icon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { isMobileDevice } from "../utils.js";

const LinkedinIcon = styled(Icon).attrs({
  icon: faLinkedin,
  size: "lg",
})`
  color: white;
  opacity: 0;
  padding: 4px 8px;
`;

const Copyright = styled(Typography).attrs({ variant: "body" })`
  position: absolute;
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
`;

const FooterContainer = styled(Container).attrs({
  align: "flex-end",
})`
  position: relative;
  min-height: 36px;
  padding-bottom: 4px;
  background-color: ${({ theme }) => theme.primary.light};
  color: white;
  opacity: 1;

  :hover {
    cursor: pointer;
    background-color: #0077b5; //linkedin color
  }

  :hover ${Copyright} {
    opacity: 0;
    transform: translateY(-20px);
    transition-duration: 400ms;
    transition-timing-function: ease-in;
  }

  :hover ${LinkedinIcon} {
    opacity: 1;
    transition-duration: 500ms;
    transition-timing-function: ease-in;
  }
`;

export function FooterSection() {
  const [showLinkedin, setShowLinkedin] = useState(false);
  const handleHover = () => {
    setShowLinkedin(true);
  };

  return (
    <a
      href="https://www.linkedin.com/in/isselinmoektijono/"
      target="_blank"
      rel="noreferrer"
    >
      <FooterContainer
        align="center"
        justify="center"
        fullWidth
        onMouseEnter={handleHover}
        showLinkedin={showLinkedin}
      >
        <Copyright>
          Lotek Kalipah Apo 42 &copy; 2021 &nbsp;
          {!isMobileDevice() && "| Website by - Isselin Moektijono"}
        </Copyright>
        <Container align="flex-end">
          <LinkedinIcon />
        </Container>
      </FooterContainer>
    </a>
  );
}
