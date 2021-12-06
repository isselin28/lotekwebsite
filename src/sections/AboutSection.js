import styled, { css } from "styled-components";
import React from "react";
import foodLotekPrepare from "../assets/food_lotek_prepare.png";
import foodKolakBubur from "../assets/food_kolakbubur.jpg";
import foodKolakCampur from "../assets/food_kolakcampur.jpg";
import foodKariayam from "../assets/food_kariayam.jpg";
import { Typography } from "../components/Typography";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
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

const Underline = styled.p`
  text-decoration: underline;
`;

function AboutSection() {
  return (
    <Container align="center" justify="center" direction="column">
      <ContentWrapper>
        <Column top="150">
          <Image width="450" height="500" src={foodLotekPrepare} alt="Lotek" />
          <Image
            width="450"
            height="260"
            src={foodKolakBubur}
            alt="Kolak Sagurangi"
          />
          <TextContainer>
            <Typography variant="label">OUR PLACE</Typography>
            <Typography variant="title">Dari Bandung ke Jakarta</Typography>
            <Typography variant="body">
              Citarasa <i>Lotek Ema</i> telah berada di{" "}
              <b>Jakarta sejak 1997</b>, mengobati rasa kangen. Kami
              mempertahankan resep jadul dan menggunakan bahan-bahan alami.
              Menikmati lotek dalam rumah dengan suasana yang <i>"homey"</i> dan
              sejuk. Tempat yang tepat bagi para pecinta sayuran dan makanan
              sehat.
            </Typography>
          </TextContainer>
        </Column>
        <Column>
          <TextContainer>
            <Typography variant="label">OUR RESTAURANT</Typography>
            <Typography variant="title">Resep Ema sedjak 1953</Typography>
            <Typography variant="body">
              Bermula di jalan <b>Kalipah Apo, Bandung</b>, <i>resep Lotek</i>{" "}
              yang diwariskan <i>Ema</i> (Nenek) melalui tiga generasi sering
              menjadi sasaran kuliner nusantara. Aroma legit bumbu kacang,
              renyahnya toge dan kangkung, bumbu khas bersensasi kencur yang
              manis dan gurih berbaur dalam sebuah piring bundar menjadi{" "}
              <i>menu khas Lotek</i>. Berbagai citarasa Sunda seperti{" "}
              <i>Kariayam, Laksa, Bubur Sagurangi, Kolak Pisang, Ketan hitam</i>{" "}
              dan menu spesial lainnya kini juga bisa dinikmati di Jakarta.
            </Typography>
          </TextContainer>
          <Image
            width="450"
            height="300"
            src={foodKolakCampur}
            alt="Kolak Campur"
          />
          <Image width="450" height="460" src={foodKariayam} alt="Kari Ayam" />
        </Column>
      </ContentWrapper>
    </Container>
  );
}

export default withTheme(AboutSection);
