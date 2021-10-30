import styled, { css } from "styled-components";
import React from "react";
import NavBar from "./NavBar/NavBar";
import houseImage from "./assets/house_front_pencil_1.jpeg";
import houseInsideImage from "./assets/house_inside_main.jpeg";
import foodLotekPrepare from "./assets/food_lotek_prepare.png";
import foodKolakBubur from "./assets/food_kolakbubur.jpg";
import foodKolakCampur from "./assets/food_kolakcampur.jpg";
import foodKariayam from "./assets/food_kariayam.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ fullWidth }) =>
    css`
      width: 100%;
    `}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Image = styled.img`
  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
      object-fit: cover;
    `}
`;

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
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

function App() {
  return (
    <>
      <NavBar />
      <Container fullWidth>
        <Image src={houseInsideImage} alt="House" />
        {/* <Image src={houseImage} alt="House" /> */}
      </Container>
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
      </Container>
    </>
  );
}

export default App;
