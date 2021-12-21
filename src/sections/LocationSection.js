import React from "react";
import styled from "styled-components";
import gofood from "../assets/gofood.png";
import grabfood from "../assets/grabfood.png";
import shopeefood from "../assets/shopeefood.png";
import LocationBar from "../components/LocationBar";
import { Typography } from "../components/Typography";
import { Container } from "../components/Container";
import { Image } from "../components/Image";

const SectionContainer = styled(Container)`
  margin-top: 20vh;
  margin-bottom: 5vh;
`;

const LocationBox = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  width: 80%;
  border: 1px solid ${({ theme }) => theme.primary.dark};
  border-radius: 5px;
  margin-bottom: 60px;
`;

export function LocationSection() {
  return (
    <SectionContainer align="center" justify="center" direction="column">
      <div id="find_us" />
      <Container
        direction="column"
        justify="center"
        align="center"
        gap="10"
        margin="40"
      >
        <Typography variant="title">Find Us</Typography>
        <Typography variant="body">
          *Due to Covid measurement, we only offers takeaway and online
          delivery. Find us via:
        </Typography>
        <Container justify="center" align="center" gap="50">
          <Image width="130" height="130" src={shopeefood} alt="shopee" />
          <Image width="115" height="110" src={gofood} alt="gojek" />
          <Image width="100" height="100" src={grabfood} alt="grab" />
        </Container>
      </Container>
      <LocationBox>
        <LocationBar />
      </LocationBox>
    </SectionContainer>
  );
}
