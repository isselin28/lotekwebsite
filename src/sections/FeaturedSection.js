import React from "react";
import styled from "styled-components";
import { Image } from "../components/Image";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import logoDetails from "./data/featuredLogo.js";
import { isMobileDevice } from "../utils.js";

const FeaturedWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  flex-direction: column;
  position: relative;
  min-width: 100vw;
  min-height: 15vh;
  gap: 15px;
  margin: 5vw 0;

  @media (min-width: 900px) {
    flex-direction: initial;
    min-width: 600px;
    min-height: 185px;
    gap: 10px;
  }
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
      <Image
        src={logoDetails[name].image}
        alt={name}
        {...rest}
        responsive={isMobileDevice()}
      />
    </a>
  );
}

export function FeaturedSection() {
  return (
    <Container
      align="center"
      justify="center"
      direction="column"
      fullHeight
      fullWidth
    >
      <Typography variant="body">Featured On</Typography>

      {isMobileDevice() ? (
        <FeaturedWrapper>
          <Logo name="kompastv" width="180" />

          <Logo name="detikfood" width="160" />

          <Logo name="cnn" width="70" height="70" />

          <Logo name="sedap" width="150" height="40" />

          <Logo name="republika" width="220" />
        </FeaturedWrapper>
      ) : (
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

          <PositioningWrapper
            direction="column"
            bottom="10"
            right="-10"
            gap="15"
          >
            <Logo name="sedap" width="170" height="45" />

            <Logo name="republika" width="245" />
          </PositioningWrapper>
        </FeaturedWrapper>
      )}
    </Container>
  );
}
