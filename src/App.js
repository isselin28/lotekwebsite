import styled from "styled-components";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import StripImage from "./components/StripImage";
import { FeaturedSection } from "./sections/FeaturedSection.js";
import { LocationSection } from "./sections/LocationSection.js";
import { MenuSection } from "./sections/MenuSection.js";
import { FooterSection } from "./sections/FooterSection.js";
import AboutSection from "./sections/AboutSection.js";
import GlobalStyle from "./GlobalStyles";
import { withTheme } from "styled-components";
import { FloatingButton } from "./components/FloatingButton/FloatingButton";

const PageSpacing = styled.div`
  height: 120px;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

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

      <MenuSection />

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
