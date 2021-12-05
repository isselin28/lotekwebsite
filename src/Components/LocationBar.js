import React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { Container } from "./Container";
import { Image } from "./Image";
import { Icon } from "./Icon";
import mapJakarta from "../assets/map_jakarta.png";
import mapBandung from "../assets/map_bandung.png";
import { faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "./Button.js";
import { withTheme } from "styled-components";

const MapWrapper = styled.div`
  position: relative;
`;

const MapImage = styled(Image).attrs({
  width: 430,
  height: 180,
})`
  border-radius: 5px;
  box-shadow: 0px 2px 4px grey;
  margin-top: 18px;
`;

const Grid = styled(Container)`
  gap: 20px;
`;

const BreakLine = styled.hr`
  border: none;
  border-top: 3px double ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.primary.light};
  overflow: visible;
  text-align: center;
  height: 5px;
  width: 40%;
  margin-top: 40px;
  margin-bottom: 20px;

  :after {
    background: ${({ theme }) => theme.background};
    content: "§";
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;

const MapButton = styled(Button).attrs({
  primary: false,
})`
  position: absolute;
  bottom: 5%;
  left: 5%;

  height: 28px;
  width: 360px;
`;

function LocationBar() {
  return (
    <Container direction="column" align="center" padding="12">
      <Grid justify="space-between" fullWidth padding="20">
        <Container direction="column">
          <Typography variant="title" align="left">
            Jakarta
          </Typography>
          <Container gap="4">
            <Icon icon={faHome} size="18" />
            <Typography variant="body" align="left">
              Jl. Batang Hari No.21, RT.1/RW.2,
              <br />
              Cideng, Kecamatan Gambir,
              <br />
              Kota Jakarta Pusat,
              <br />
              Jakarta 10150,
              <br />
              Indonesia
            </Typography>
          </Container>
          <Container gap="4">
            <Icon icon={faWhatsapp} size="20" />
            <Typography variant="body" align="left">
              <a
                href="https://wa.me/6281386041621"
                target="_blank"
                rel="noreferrer"
              >
                <Button primary>+62 813-8604-1621</Button>
              </a>
            </Typography>
          </Container>
        </Container>
        <MapWrapper>
          <MapImage src={mapJakarta} />
          <a
            href="https://goo.gl/maps/3bGVGfccvN3KL1Dh9"
            target="_blank"
            rel="noreferrer"
          >
            <MapButton>Open in Google Map</MapButton>
          </a>
        </MapWrapper>
      </Grid>
      <Container padding="10">
        <Typography variant="body">
          Buka Senin - Sabtu, 10.00 - 15.00 . Minggu tutup.
        </Typography>
      </Container>

      <BreakLine />
      <Grid justify="space-between" fullWidth padding="20">
        <Container direction="column">
          <Typography variant="title" align="left">
            Bandung
          </Typography>
          <Container gap="4">
            <Icon icon={faHome} size="18" />
            <Typography variant="body" align="left">
              Jl. Kalipah Apo No.42,
              <br />
              Karanganyar, Kec. Astanaanyar,
              <br />
              Kota Bandung,
              <br />
              Jawa Barat 40241,
              <br />
              Indonesia
            </Typography>
          </Container>
          <Container gap="4">
            <Icon icon={faPhoneAlt} size="18" />
            <Typography variant="body" align="left">
              <Button primary>+62 22-420-5983</Button>
            </Typography>
          </Container>
        </Container>
        <MapWrapper>
          <MapImage src={mapBandung} />
          <a
            href="https://goo.gl/maps/mdfDjqW91y4TCFJ37"
            target="_blank"
            rel="noreferrer"
          >
            <MapButton>Open in Google Map</MapButton>
          </a>
        </MapWrapper>
      </Grid>
      <Container padding="10">
        <Typography variant="body">
          Buka Senin, Rabu - Minggu 9.00 - 16.30 . Selasa tutup.
        </Typography>
      </Container>
    </Container>
  );
}

export default withTheme(LocationBar);
