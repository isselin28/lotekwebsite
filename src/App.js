import styled, { css } from "styled-components";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import foodLotekPrepare from "./assets/food_lotek_prepare.png";
import foodKolakBubur from "./assets/food_kolakbubur.jpg";
import foodKolakCampur from "./assets/food_kolakcampur.jpg";
import foodKariayam from "./assets/food_kariayam.jpg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import gofood from "./assets/gofood.png";
import grabfood from "./assets/grabfood.png";
import shopeefood from "./assets/shopeefood.png";
import republika from "./assets/logo_republika.png";
import detikfood from "./assets/logo_detikfood.png";
import cnn from "./assets/logo_cnn.png";
import StripImage from "./Components/StripImage";
import LocationBar from "./Components/LocationBar";
import { Typography } from "./Components/Typography";
import { Container } from "./Components/Container";
import { Image } from "./Components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  gap: 40px;
  margin-bottom: 30px;
`;

const LocationBox = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  width: 80%;
  border: 1px solid #94703a;
  border-radius: 5px;
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

const FooterContainer = styled.div`
  max-height: 240px;
  height: 200px;
  width: 100%;
  object-fit: cover;
  background-color: #94703a;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconWrapper = styled(Typography).attrs({
  variant: "label",
})`
  display: flex;
  color: white;
  font-size: 13px;
  padding-bottom: 4px;
  gap: 8px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 220px;
  top: 40px;
`;

const Copywright = styled(Typography).attrs({ variant: "body" })`
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
  position: absolute;
  bottom: 10px;
`;

const FeaturedWrapper = styled(Container).attrs({
  justify: "center",
})`
  position: relative;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
  margin-left: -30px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #b98d4b;
  font-size: ${(props) => props.size}px;
  padding: 4px 8px 4px 0;
`;

function App() {
  return (
    <>
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
        <div id="menu" />

        <Typography variant="body">Featured On</Typography>
        <FeaturedWrapper>
          <Container
            direction="column"
            justify="flex-end"
            align="flex-end"
            padding="16"
          >
            <Image width="255" src={republika} alt="republika" />
            <Image width="195" src={detikfood} alt="detikfood" />
          </Container>
          <Image width="90" height="90" src={cnn} alt="cnn" />
        </FeaturedWrapper>

        <Container
          direction="column"
          justify="center"
          align="center"
          gap="10"
          margin="20"
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
      </Container>
      <StripImage
        imageUrl={houseInside}
        position="bottom center"
        size="cover"
        opacity="0.5"
      />
      <FooterContainer>
        <SocialMediaWrapper>
          <IconWrapper>
            <i class="fab fa-instagram fa-2x" /> lotekkalipahapo42
          </IconWrapper>
          <IconWrapper>
            <i class="fab fa-whatsapp fa-2x" /> 813-8604-1621
          </IconWrapper>
        </SocialMediaWrapper>
        <Copywright>&copy; 2021 by Isselin</Copywright>
      </FooterContainer>
    </>
  );
}

export default App;
