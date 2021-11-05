import styled, { css } from "styled-components";
import React from "react";
import NavBar from "./NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import foodLotekPrepare from "./assets/food_lotek_prepare.png";
import foodKolakBubur from "./assets/food_kolakbubur.jpg";
import foodKolakCampur from "./assets/food_kolakcampur.jpg";
import foodKariayam from "./assets/food_kariayam.jpg";
import houseInside from "./assets/house_inside.png";
import gofood from "./assets/gofood.png";
import grabfood from "./assets/grabfood.png";
import shopeefood from "./assets/shopeefood.png";
import StripImage from "./StripImage/StripImage";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
`;

const DeliveryWrapper = styled(ContentWrapper)`
  gap: 30px;
  border: 2px solid #94703a;
  border-radius: 10px;
  padding: 10px 50px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  object-fit: cover;
  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `}
`;

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

const TextLabel = styled.div`
  font-size: 14px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #605e5e;
  letter-spacing: 2px;
  line-height: 2;
  text-transform: uppercase;

  margin-bottom: 4px;
`;

const TextTitle = styled.div`
  font-size: 30px;
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-weight: 300;
  color: rgb(148, 112, 58);

  margin-bottom: 4px;
`;

const TextDescription = styled.div`
  font-size: 15px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #605e5e;
  line-height: 2;

  margin-bottom: 4px;
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

const IconWrapper = styled(TextLabel)`
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

const Copywright = styled(TextDescription)`
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
  position: absolute;
  bottom: 10px;
`;

function App() {
  return (
    <>
      <NavBar />
      <StripImage imageUrl={houseImage} position="top center" size="contain" />
      <Container>
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
              <TextLabel>OUR RESTAURANT</TextLabel>
              <TextTitle>Local fresh cuisine for everyone</TextTitle>
              <TextDescription>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </TextDescription>
            </TextContainer>
          </Column>
          <Column>
            <TextContainer>
              <TextLabel>OUR RESTAURANT</TextLabel>
              <TextTitle>Local fresh cuisine for everyone</TextTitle>
              <TextDescription>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </TextDescription>
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
        <DeliveryWrapper>
          <TextTitle>Deliver to Your Doorstep</TextTitle>
          <Image width="140" height="140" src={gofood} alt="Kari Ayam" />
          <Image width="140" height="140" src={grabfood} alt="Kari Ayam" />
          <Image width="180" height="180" src={shopeefood} alt="Kari Ayam" />
        </DeliveryWrapper>
      </Container>
      <StripImage
        imageUrl={houseInside}
        position="bottom center"
        size="cover"
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
