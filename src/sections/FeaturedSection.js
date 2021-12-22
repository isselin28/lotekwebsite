import React from "react";
import styled from "styled-components";
import { Image } from "../components/Image";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import logoDetails from "./data/featuredLogo.js";

const FeaturedWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  position: relative;
  min-width: 600px;
  min-height: 185px;
  gap: 10px;
  margin: 5vw 0;
`;

const PositioningWrapper = styled(Container)`
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
`;

function Logo(props) {
  const { name, ...rest } = props;
  return (
    <a href={logoDetails[name].url} target="_blank" rel="noreferrer">
      <Image src={logoDetails[name].image} alt={name} {...rest} />
    </a>
  );
}

export function FeaturedSection() {
  return (
    <Container align="center" justify="center" direction="column" fullHeight>
      <Typography variant="body">Featured On</Typography>
      <FeaturedWrapper>
        <PositioningWrapper
          direction="column"
          justify="flex-start"
          align="flex-start"
          top="0"
          left="0"
        >
          <PositioningWrapper top="0" left="65">
            <Logo name="kompastv" width="210" />
          </PositioningWrapper>

          <PositioningWrapper top="70" left="35">
            <Logo name="detikfood" width="195" />
          </PositioningWrapper>
        </PositioningWrapper>

        <Logo name="cnn" width="90" height="90" />

        <PositioningWrapper direction="column" bottom="10" right="-10" gap="15">
          <Logo name="sedap" width="170" height="45" />

          <Logo name="republika" width="245" />
        </PositioningWrapper>
      </FeaturedWrapper>
    </Container>
  );
}
