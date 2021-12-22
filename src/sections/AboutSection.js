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
  fullWidth: true,
})`
  max-width: 950px;
  gap: 40px;
  margin-top: 10vh;
  margin-bottom: 30px;
`;

const Column = styled(Container).attrs({
  direction: "column",
})`
  flex-wrap: wrap;
  flex: 1;
  width: 30%;
  gap: 40px;

  ${({ top }) =>
    css`
      margin-top: ${top}px;
    `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

function AboutSection() {
  return (
    <Container align="center" justify="center" direction="column">
      <div id="about" />
      <ContentWrapper>
        <Column top="150">
          <Image
            responsive
            width="450"
            height="500"
            src={foodLotekPrepare}
            alt="Lotek"
          />
          <Image
            responsive
            width="450"
            height="260"
            src={foodKolakBubur}
            alt="Kolak Sagurangi"
          />
          <TextContainer>
            <Typography variant="label">OUR PLACE</Typography>
            <Typography variant="title">From Bandung to Jakarta</Typography>
            <Typography variant="body">
              The flavour of <i>Ema's Lotek</i> has been present in{" "}
              <b>Jakarta since 1997</b>. We preserves our nuance by using
              traditional recipe, homemade cooking, and natural, non-artificial
              ingredients. Enjoy our <i>Lotek</i> and <i>Kolak</i> in a homely,
              semi-traditional style house. A perfect place to snug yourself
              into relaxed atmosphere and feel at ease with our healthy
              comforting food.
            </Typography>
            <Typography variant="body"></Typography>
          </TextContainer>
        </Column>
        <Column>
          <TextContainer>
            <Typography variant="label">OUR RESTAURANT</Typography>
            <Typography variant="title">Ema Recipe since 1953</Typography>
            <Typography variant="body">
              Began in <b>Kalipah Apo street, Bandung</b>. <i>Lotek recipe</i>{" "}
              that has been passed through three generations from <i>Ema</i>{" "}
              (Grandma in Sunda), has been known and sought after as a local
              culinary heritage. Fragrant peanut sauce, crisp beansprout,
              cabbage and water spinach, sweet-savory signature sauce with a
              hint of aromatic ginger, blended together becomes our special menu{" "}
              <i>Lotek</i>.
              <br />
              <br />
              Various Sundanese cuisine and desserts such as{" "}
              <i>
                Rendang Jengkol, Chicken Curry, Bubur Jali, Bubur Sagurangi,
                Kolak Pisang,
              </i>{" "}
              and other specialties are also available in Jakarta.
            </Typography>
          </TextContainer>
          <Image
            responsive
            width="450"
            height="300"
            src={foodKolakCampur}
            alt="Kolak Campur"
          />
          <Image
            responsive
            width="450"
            height="460"
            src={foodKariayam}
            alt="Kari Ayam"
          />
        </Column>
      </ContentWrapper>
    </Container>
  );
}

export default withTheme(AboutSection);
