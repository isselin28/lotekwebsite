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
  width: 80vw;
  margin-top: 20vh;
  margin-bottom: 5vh;
`;

const deliveryDetails = {
  shopeefood: {
    image: shopeefood,
    url: "",
  },
  gofood: {
    image: gofood,
    url: "https://gofood.co.id/english/jakarta/restaurant/lotek-kalipah-apo-42-041df2ed-15fc-4deb-a921-65ca8659f130",
  },
  grabfood: {
    image: grabfood,
    url: "https://food.grab.com/id/en/restaurant/lotek-kalipah-apo-42-cideng-delivery/6-CZN1EA5UNKAJPE",
  },
};

function DeliveryLogo(props) {
  const { name, ...rest } = props;
  return (
    <a href={deliveryDetails[name].url} target="_blank" rel="noreferrer">
      <Image src={deliveryDetails[name].image} alt={name} {...rest} />
    </a>
  );
}

export function LocationSection() {
  return (
    <>
      <div id="find_us" />
      <Container align="center" justify="center">
        <SectionContainer
          align="center"
          justify="center"
          direction="column"
          gap="15"
        >
          <Typography variant="title">Find Us</Typography>
          <Typography variant="body">
            Get our specialties delivered to your doorstep via these online
            platforms,
          </Typography>

          <Container justify="center" align="center" gap="50">
            <DeliveryLogo width="130" height="130" name="shopeefood" />
            <DeliveryLogo width="115" height="110" name="gofood" />
            <DeliveryLogo width="100" height="100" name="grabfood" />
          </Container>

          <Typography variant="body" padding="10">
            Or visit our dining places at...
          </Typography>
          <LocationBar />
        </SectionContainer>
      </Container>
    </>
  );
}
