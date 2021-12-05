import styled, { css } from "styled-components";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import foodLotekPrepare from "./assets/food_lotek_prepare.png";
import foodKolakBubur from "./assets/food_kolakbubur.jpg";
import foodKolakCampur from "./assets/food_kolakcampur.jpg";
import foodKariayam from "./assets/food_kariayam.jpg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import StripImage from "./components/StripImage";
import { Typography } from "./components/Typography";
import { Container } from "./components/Container";
import { Image } from "./components/Image";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FeaturedSection } from "./sections/FeaturedSection.js";
import { LocationSection } from "./sections/LocationSection.js";
import GlobalStyle from "./GlobalStyles";
import { withTheme } from "styled-components";

const ContentWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  gap: 40px;
  margin-bottom: 30px;
`;

const Column = styled(Container).attrs({
  direction: "column",
})`
  flex-wrap: wrap;
  flex: 1;
  gap: 40px;

  ${({ top }) =>
    css`
      margin-top: ${top}px;
    `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 240px;
  gap: 8px;
  margin-bottom: 60px;
`;

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

const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.primary.light};
  height: 1px;
  min-width: 100px;
  margin: 12px;
`;

function Divider() {
  return (
    <Container align="center" margin="80">
      <Line />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Line />
    </Container>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StripImage imageUrl={houseImage} position="top center" size="contain" />
      <div id="about" />
      <Container align="center" justify="center" direction="column">
        <ContentWrapper>
          <Column top="150">
            <Image
              width="450"
              height="500"
              src={foodLotekPrepare}
              alt="Lotek"
            />
            <Image
              width="450"
              height="260"
              src={foodKolakBubur}
              alt="Kolak Sagurangi"
            />
            <TextContainer>
              <Typography variant="label">OUR PLACE</Typography>
              <Typography variant="title">
                Hadir di Bandung, Hadir di Jakarta
              </Typography>
              <Typography variant="body">
                Citarasa Lotek Oma telah hadir di jakarta, mengobati kangen.
                Rumah dengan suasana yang "homey" dan sejuk. Tempat yang tepat
                bagi para pecinta sayuran dan makanan sehat.
              </Typography>
            </TextContainer>
          </Column>
          <Column>
            <TextContainer>
              <Typography variant="label">OUR RESTAURANT</Typography>
              <Typography variant="title">Resep Oma sedjak 1953</Typography>
              <Typography variant="body">
                Bermula di jalan <b>Kalipah Apo, Bandung</b>, <i>resep Lotek</i>{" "}
                yang diwariskan Oma melalui generasi, sering menjadi sasaran
                kuliner nusantara. Aroma legit bumbu kacang, renyahnya toge dan
                kacang panjang, bumbu yang manis dan gurih berbaur dalam sebuah
                piring bundar menjadi <i>menu khas Lotek</i>. Berbagai citarasa
                Sunda seperti{" "}
                <i>Gado-gado, Kariayam, Candil, Pacar, Ketan hitam</i> dan menu
                spesial lainnya kini juga bisa dinikmati di Jakarta.
              </Typography>
            </TextContainer>
            <Image
              width="450"
              height="300"
              src={foodKolakCampur}
              alt="Kolak Campur"
            />
            <Image
              width="450"
              height="460"
              src={foodKariayam}
              alt="Kari Ayam"
            />
          </Column>
        </ContentWrapper>

        <FeaturedSection />

        <Divider />

        <div id="menu" />
        <Container direction="column" align="center">
          <Typography variant="title">Menu</Typography>
          <Button primary>Download Our Special Delicacies Here</Button>
        </Container>

        <Divider />

        <div id="find_us" />
        <LocationSection />
      </Container>
      <StripImage
        imageUrl={houseInside}
        position="bottom center"
        size="cover"
        opacity="0.5"
      />
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
    </>
  );
}

export default withTheme(App);
