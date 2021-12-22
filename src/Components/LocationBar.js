import React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { Container } from "./Container";
import { Image } from "./Image";
import { Icon } from "./Icon";
import mapJakarta from "../assets/map_jakarta.png";
import mapBandung from "../assets/map_bandung.png";
import googleMapIcon from "../assets/ic_googlemap.png";
import { faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "./Button.js";
import { withTheme } from "styled-components";

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  max-height: 180px;
`;

const MapImage = styled(Image)`
  width: 100%;
  max-width: 480px;
  max-height: 180px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px grey;
  margin-top: 18px;
`;

const MapButton = styled(Button).attrs({
  primary: false,
})`
  position: absolute;
  bottom: -10px;
  right: 0px;
  transform: translateX(-20%);

  height: 28px;
  width: 8%;

  :hover ${Icon} {
    color: white;
  }
`;

const FlexColumn = styled.div`
  min-width: 40%;
`;

const ContentWrapper = styled(Container)`
  gap: 50px;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const SectionWrapper = styled(Container)`
  width: 70%;
  border: 1px solid ${({ theme }) => theme.primary.dark};
  border-radius: 5px;
  padding: 20px 10vw 30px 10vw;
  margin: 20px 0 40px 0;
`;

const locationDetails = [
  {
    location: "Jakarta",
    street: "Jl. Batang Hari No.21, RT.1/RW.2,",
    kecamatan: "Cideng, Kecamatan Gambir,",
    city: "Kota Jakarta Pusat,",
    province: "Jakarta 10150,",
    country: "Indonesia",
    whatsapp: "+62 813-8604-1621",
    whatsappUrl: "https://wa.me/6281386041621",
    imageUrl: mapJakarta,
    googleMapUrl: "https://goo.gl/maps/3bGVGfccvN3KL1Dh9",
    openingHour:
      "Open Monday - Saturday, 10.00 - 15.00 WIB . Close on Sunday & PH.",
  },
  {
    location: "Bandung",
    street: "Jl. Kalipah Apo No.42,",
    kecamatan: "Karanganyar, Kec. Astanaanyar,",
    city: "Kota Bandung,",
    province: "Jawa Barat 40241,",
    country: "Indonesia",
    phone: "+62 22-420-5983",
    imageUrl: mapBandung,
    googleMapUrl: "https://goo.gl/maps/mdfDjqW91y4TCFJ37",
    openingHour:
      "Open Monday, Wednesday - Sunday 9.00 - 16.30 WIB. Close on Tuesday & PH.",
  },
];

function LocationBar() {
  return (
    <SectionWrapper direction="column" align="center" justify="center">
      {locationDetails.map((location) => (
        <>
          <ContentWrapper align="center" justify="center">
            <FlexColumn direction="column">
              <Typography variant="title" align="left">
                {location.location}
              </Typography>
              <Container gap="4">
                <Icon icon={faHome} size="18" />
                <Typography variant="body" align="left">
                  {location.street}
                  <br />
                  {location.kecamatan}
                  <br />
                  {location.city}
                  <br />
                  {location.province}
                  <br />
                  {location.country}
                </Typography>
              </Container>
              <Container gap="4">
                <Icon
                  icon={location.whatsapp ? faWhatsapp : faPhoneAlt}
                  size="20"
                />
                <Typography variant="body" align="left">
                  <a
                    href={location.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button primary>
                      {location.whatsapp ? location.whatsapp : location.phone}
                    </Button>
                  </a>
                </Typography>
              </Container>
            </FlexColumn>
            <MapWrapper>
              <MapImage src={location.imageUrl} />
              <a href={location.googleMapUrl} target="_blank" rel="noreferrer">
                <MapButton>
                  <Image src={googleMapIcon} alt="Google Map icon" width="15" />
                </MapButton>
              </a>
            </MapWrapper>
          </ContentWrapper>
          <Container padding="20">
            <Typography variant="body">{location.openingHour}</Typography>
          </Container>
        </>
      ))}
    </SectionWrapper>
  );
}

export default withTheme(LocationBar);
