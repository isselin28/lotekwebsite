import styled from "styled-components";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import StripImage from "./components/StripImage";
import { Typography } from "./components/Typography";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FeaturedSection } from "./sections/FeaturedSection.js";
import { LocationSection } from "./sections/LocationSection.js";
import { FooterSection } from "./sections/FooterSection.js";
import AboutSection from "./sections/AboutSection.js";
import GlobalStyle from "./GlobalStyles";
import { withTheme } from "styled-components";
import { FloatingButton } from "./components/FloatingButton/FloatingButton";

const Line = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};
  height: 1px;
  min-width: 100px;
  margin: 12px;
`;

const PageSpacing = styled.div`
  height: 120px;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
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
      <FloatingButton />
      <NavBar />
      <StripImage imageUrl={houseImage} position="top center" size="contain" />

      <div id="about" />
      <AboutSection />

      <PageSpacing />

      <FeaturedSection />

      <PageSpacing />

      <Container direction="column" align="center">
        <Divider />
        <div id="menu" />
        <Typography variant="title">Menu</Typography>
        <Button primary>Download Our Special Delicacies Here</Button>
        <Divider />
      </Container>

      <PageSpacing />

      <div id="find_us" />
      <LocationSection />

      <StripImage
        imageUrl={houseInside}
        position="bottom center"
        size="cover"
        opacity="0.5"
      />

      <FooterSection />
    </>
  );
}

export default withTheme(App);
