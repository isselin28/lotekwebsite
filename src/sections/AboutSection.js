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
import { isMobileDevice } from "../utils.js";

const ContentWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
  fullWidth: true,
})`
  flex-direction: column;
  max-width: 950px;
  gap: 40px;
  margin-top: 10vh;
  margin-bottom: 30px;

  @media (min-width: 900px) {
    flex-direction: row-reverse;
  }
`;

const Column = styled(Container).attrs({
  justify: "center",
  align: "center",
})`
  flex-direction: column-reverse;
  flex-wrap: wrap;
  flex: 1;
  width: 80%;
  gap: 40px;

  ${({ top }) =>
    css`
      margin-top: ${top}px;
    `}

  @media (min-width: 900px) {
    width: 30%;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  order: 1;

  @media (min-width: 900px) {
    order: initial;
  }
`;

function AboutSection() {
  return (
    <Container align="center" justify="center" direction="column">
      <div id="about" />
      <ContentWrapper>
        <Column>
          <TextContainer>
            <Typography variant="label">OUR RESTAURANT</Typography>
            <Typography variant="title">Ema's Recipe since 1953</Typography>
            <Typography variant="body">
              Began in <b>Kalipah Apo street, Bandung, 1953</b>.{" "}
              <i>Lotek recipe</i> that has been passed through three generations
              from <i>Ema</i> (Grandma in Sunda), is known and sought after as a
              local culinary heritage. Fragrant peanut sauce, crisp beansprout,
              cabbage and water spinach, sweet-savory signature sauce with a
              hint of aromatic ginger, blended together becomes our special menu{" "}
              <i>Lotek</i>.
              <br />
              <br />
              Various Sundanese cuisines and desserts such as{" "}
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
            height={isMobileDevice() ? "500" : "460"}
            src={isMobileDevice() ? foodLotekPrepare : foodKariayam}
            alt="Kari Ayam"
          />
        </Column>

        <Column top="150">
          <Image
            responsive
            width="450"
            height={isMobileDevice() ? "460" : "500"}
            src={isMobileDevice() ? foodKariayam : foodLotekPrepare}
            alt="Signature's Lotek"
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
              <b>Jakarta since 1997</b>. We preserve our nuance by using
              traditional recipe, homemade cooking, and natural, non-artificial
              ingredients. Enjoy our <i>Lotek</i> and <i>Kolak</i> in a homely,
              semi-traditional style house. A perfect place to snug yourself
              into a relaxed atmosphere and feel at ease with our healthy
              comforting food.
            </Typography>
            <Typography variant="body"></Typography>
          </TextContainer>
        </Column>
      </ContentWrapper>
    </Container>
  );
}

export default withTheme(AboutSection);
